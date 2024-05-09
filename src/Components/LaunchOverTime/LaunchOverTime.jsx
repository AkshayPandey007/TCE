import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { latAndLong } from '../../Redux/Service/Launch.Service';
import { useDispatch } from 'react-redux';


const LaunchOverTime = ({ allLaunchesData }) => {

    const dispatch = useDispatch()
    const transformData = () => {
        const counts = {};
        allLaunchesData?.allLaunchesData?.forEach((item) => {
          counts[item?.launch_year] = (counts[item?.launch_year] || 0) + 1;
        });
        return Object.keys(counts).map((year) => (
           {
           
          year: parseInt(year),
          count: counts[year],
          id: allLaunchesData?.allLaunchesData?.find((item) => item?.launch_year == parseInt(year))
        }));
      };

  const transformedData = transformData(allLaunchesData?.allLaunchesData);

  const handleClick = (bar) => {
    dispatch(latAndLong(bar.id.launch_site.site_id))
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={20}
        height={30}
        data={transformedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" onClick={handleClick} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LaunchOverTime;
