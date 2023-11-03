import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AddNewJob from './pages/AddNewJob';
import EditJob from './pages/EditJob';

export default function App() {
   return (
      <>
         <Navbar />
         <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/add-new-job" element={<AddNewJob />} />
               <Route path="/edit-job" element={<EditJob />} />
            </Routes>
         </div>
      </>
   );
}
