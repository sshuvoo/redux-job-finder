import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utilities/axiosInstance';

const initialState = {
   jobs: [],
   isLoading: false,
   isError: false,
   error: '',
   sortType: 'default',
   filterType: 'All',
   editJob: {},
   searchQuery: '',
};

export const getJobsAsync = createAsyncThunk('jobs/get', async () => {
   const response = await axios.get('/jobs');
   return response.data;
});

export const postJobAsync = createAsyncThunk('jobs/post', async (data) => {
   const response = await axios.post('/jobs', data);
   return response.data;
});

export const putJobAsync = createAsyncThunk(
   'jobs/put',
   async ({ id, ...rest }) => {
      const response = await axios.put(`/jobs/${id}`, { ...rest });
      return response.data;
   }
);

export const deleteJobAsync = createAsyncThunk('jobs/delete', async (id) => {
   await axios.delete(`/jobs/${id}`);
   return id;
});

const jobsSlice = createSlice({
   name: 'jobs',
   initialState,
   reducers: {
      sortBySalary: (state, { payload }) => {
         state.sortType = payload;
      },
      filterByType: (state, { payload }) => {
         state.filterType = payload;
      },
      setEditJob: (state, { payload }) => {
         state.editJob = payload;
      },
      resetEditJob: (state) => {
         state.editJob = {};
      },
      setSearchQuery: (state, { payload }) => {
         state.searchQuery = payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getJobsAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getJobsAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.jobs = payload;
         })
         .addCase(getJobsAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
         })
         .addCase(postJobAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(postJobAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.jobs.push(payload);
         })
         .addCase(postJobAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
         })
         .addCase(deleteJobAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(deleteJobAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.jobs = state.jobs.filter((job) => job.id !== payload);
         })
         .addCase(deleteJobAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
         })
         .addCase(putJobAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(putJobAsync.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.jobs = state.jobs.map((job) => {
               if (job.id === payload.id) return payload;
               else return job;
            });
         })
         .addCase(putJobAsync.rejected, (state, { error }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
         });
   },
});

export default jobsSlice.reducer;
export const {
   sortBySalary,
   filterByType,
   setEditJob,
   resetEditJob,
   setSearchQuery,
} = jobsSlice.actions;
