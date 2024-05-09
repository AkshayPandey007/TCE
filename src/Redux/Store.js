import { configureStore } from "@reduxjs/toolkit";
import launchSlice from "./Service/Launch.Service";


const Store = configureStore({
  reducer: {
   launch : launchSlice.reducer
  },
  devTools: true,
});


export default Store;
