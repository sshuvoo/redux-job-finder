import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/features/jobs/jobsSlice';

export default function SearchContainer() {
   const { searchQuery } = useSelector((state) => state.jobs);
   const dispatch = useDispatch();

   return (
      <div className="search-field group flex-1">
         <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
         <input
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            value={searchQuery}
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
         />
      </div>
   );
}
