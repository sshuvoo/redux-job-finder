import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByType } from '../redux/features/jobs/jobsSlice';

export default function Sidebar() {
   const filterType = useSelector((state) => state.jobs.filterType);
   const dispatch = useDispatch();

   return (
      <div className="sidebar">
         <nav>
            <ul className="space-y-4">
               <li>
                  <Link
                     onClick={() => dispatch(filterByType('All'))}
                     to={'/'}
                     className={`main-menu ${
                        filterType === 'All' && 'menu-active'
                     }`}
                     id="lws-alljobs-menu"
                  >
                     <i className="fa-solid fa-briefcase"></i>{' '}
                     <span> All Available Jobs</span>
                  </Link>
                  <ul className="space-y-6 lg:space-y-2 ">
                     <li>
                        <Link
                           onClick={() => dispatch(filterByType('Internship'))}
                           className={`sub-menu ${
                              filterType === 'Internship' && 'menu-active'
                           }`}
                           to={'/'}
                           id="lws-internship-menu"
                        >
                           <i className="fa-solid fa-stop !text-[#FF5757]"></i>{' '}
                           <span>Internship</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           onClick={() => dispatch(filterByType('Full Time'))}
                           className={`sub-menu ${
                              filterType === 'Full Time' && 'menu-active'
                           }`}
                           to={'/'}
                           id="lws-fulltime-menu"
                        >
                           <i className="fa-solid fa-stop !text-[#FF8A00]"></i>{' '}
                           <span>Full Time</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           onClick={() => dispatch(filterByType('Remote'))}
                           className={`sub-menu ${
                              filterType === 'Remote' && 'menu-active'
                           }`}
                           to={'/'}
                           id="lws-remote-menu"
                        >
                           <i className="fa-solid fa-stop !text-[#56E5C4]"></i>{' '}
                           <span>Remote</span>
                        </Link>
                     </li>
                  </ul>
               </li>
               <li>
                  <Link
                     to="/add-new-job"
                     className="main-menu"
                     id="lws-addJob-menu"
                  >
                     <i className="fa-solid fa-file-circle-plus"></i>{' '}
                     <span>Add NewJob</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}
