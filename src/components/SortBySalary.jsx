import { useDispatch, useSelector } from 'react-redux';
import { sortBySalary } from '../redux/features/jobs/jobsSlice';

export default function SortBySalary() {
   const sortType = useSelector((state) => state.jobs.sortType);
   const dispatch = useDispatch();

   return (
      <select
         onChange={(e) => dispatch(sortBySalary(e.target.value))}
         id="lws-sort"
         name="sort"
         autoComplete="sort"
         className="flex-1"
         value={sortType}
      >
         <option value="default">Default</option>
         <option value="ascending">Salary (Low to High)</option>
         <option value="descending">Salary (High to Low)</option>
      </select>
   );
}
