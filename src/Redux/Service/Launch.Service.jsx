import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LaunchService from "../Feature/Launch.Slice";

const initialState = {
  isFetching: false,
  error: "",
  isError: false,
  upcomingData:0,
  pastData:0,
  allLaunchesData:[],
  lat:0,
  long:0
};



  export const upcomingLaunch = createAsyncThunk(
    "upcoming/data",
    async (_, thunkAPI) => {
      const response = await LaunchService.upcomingLaunch();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  );

  export const pastLaunch = createAsyncThunk(
    "past/data",
    async (_, thunkAPI) => {
      const response = await LaunchService.pastLaunch();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  );

  export const allLaunches = createAsyncThunk(
    "all/launches",
    async (_, thunkAPI) => {
      const response = await LaunchService.allLaunches();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  );


  export const latAndLong = createAsyncThunk(
    "lat/long",
    async (place, thunkAPI) => {
      const response = await LaunchService.latAndLong(place);
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  );



  const launchSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {
      clearState: (state) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
      },
    },
    extraReducers: (builder) => {
      builder
      .addCase(upcomingLaunch.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(upcomingLaunch.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
        state.upcomingData=action.payload.length
      })
      .addCase(upcomingLaunch.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.payload ;
      })
      .addCase(pastLaunch.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(pastLaunch.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
        state.pastData=action.payload.length
      })
      .addCase(pastLaunch.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.payload ;
      })
      .addCase(allLaunches.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(allLaunches.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
        state.allLaunchesData=action.payload
      })
      .addCase(allLaunches.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.payload ;
      })
      .addCase(latAndLong.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(latAndLong.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
        state.lat=action.payload.location?.latitude
        state.long=action.payload.location?.longitude
      })
      .addCase(latAndLong.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.payload ;
      })
    },
  });
  
  export const { clearState } = launchSlice.actions;
  
  export default launchSlice;