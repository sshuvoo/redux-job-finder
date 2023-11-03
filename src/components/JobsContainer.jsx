import { useDispatch, useSelector } from 'react-redux';
import SingleJob from './SingleJob';
import { useEffect } from 'react';
import { getJobsAsync } from '../redux/features/jobs/jobsSlice';
import filtering from '../utilities/filtering';

export default function JobsContainer() {
   const {
      jobs,
      isLoading,
      isError,
      error,
      sortType,
      filterType,
      searchQuery,
   } = useSelector((state) => state.jobs);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getJobsAsync());
   }, [dispatch]);

   if (isLoading) return <div>Loading...</div>;
   if (!isLoading && isError) return <div>{error}</div>;
   if (!isLoading && !isError && jobs?.length === 0)
      return <div>No jobs Available</div>;

   return (
      <div className="jobs-list">
         {filtering(jobs, filterType, searchQuery, sortType).map((job) => (
            <SingleJob key={job.id} job={job} />
         ))}
      </div>
   );
}
