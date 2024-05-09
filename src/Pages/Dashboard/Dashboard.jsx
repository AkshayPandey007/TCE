import React from 'react'
import MenuAppBar from '../../Components/Navbar/Navbar'
import { SideBar } from '../../Components/SideBar/SideBar'
import style from './Dashboard.module.css'
import LaunchDashboard from '../../Components/LaunchDashboard/LaunchDashboard'
import { Hidden } from '@mui/material';
import MapGraphTime from '../../Components/MapGraphTime/MapGraphTime'

const Dashboard = () => {
  return (
    <div className={style.DashboardBox}>
      <MenuAppBar />
      <div className={style.NavBelowBox}>
      <Hidden smDown>
          <div className={style.MenuBox}>
            <SideBar />
          </div>
        </Hidden>
        <div className={style.AnalyticsBox}>
         <h4>Analytics Dashboard</h4>
         <LaunchDashboard/>
         <MapGraphTime/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
