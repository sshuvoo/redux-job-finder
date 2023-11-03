import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from './features/jobs/jobsSlice';

const store = configureStore({
   reducer: {
      jobs: jobsSlice,
   },
});

export default store;
