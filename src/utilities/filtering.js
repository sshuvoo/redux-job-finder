export default function filtering(jobs, filterType, searchQuery, sortType) {
   return jobs
      .filter((job) => {
         if (filterType === 'All') return true;
         else if (job.type === filterType) return true;
         else return false;
      })
      .filter((job) => {
         if (searchQuery?.trim() === '') return true;
         else {
            if (job.title.toLowerCase().includes(searchQuery.toLowerCase())) {
               return true;
            } else false;
         }
      })
      .sort((a, b) => {
         if (sortType === 'ascending') return a.salary - b.salary;
         else if (sortType === 'descending') return b.salary - a.salary;
         else return true;
      });
}
