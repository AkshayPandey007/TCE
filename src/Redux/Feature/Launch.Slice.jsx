import axios from "axios";

async function upcomingLaunch() {
    try {
      const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/upcoming`);
      return data;
    } catch (e) {
      return e.response.data;
    }
  }

  async function pastLaunch() {
    try {
      const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/past`);
      return data;
    } catch (e) {
      return e.response.data;
    }
  }

  async function allLaunches() {
    try {
      const { data } = await axios.get(`https://api.spacexdata.com/v3/launches`);
      return data;
    } catch (e) {
      return e.response.data;
    }
  }


  async function latAndLong(place) {
    try {
      const { data } = await axios.get(`https://api.spacexdata.com/v3/launchpads/${place?place:'vafb_slc_4e'}`);
      return data;
    } catch (e) {
      return e.response.data;
    }
  }



  const LaunchService = {
    upcomingLaunch,
    pastLaunch,
    allLaunches,
    latAndLong
    };
    
    export default LaunchService;