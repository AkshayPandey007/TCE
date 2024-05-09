import React, { useEffect } from 'react'
import style from "./MapGraphTime.module.css"
import LaunchTimeline from '../LaunchTimeline/LaunchTimeline'
import { useDispatch, useSelector } from 'react-redux'
import { allLaunches } from '../../Redux/Service/Launch.Service'
import LaunchPad from '../LaunchPad/LaunchPad'
import LaunchOverTime from '../LaunchOverTime/LaunchOverTime'
import { Box } from '@mui/material'

const MapGraphTime = () => {
  const allLaunchesData = useSelector((state)=>state.launch)
  const disptach = useDispatch()

  useEffect(()=>{
   disptach(allLaunches())
  },[])



  return (
    <div className={style.MapGraphTimeBox}>
        <div className={style.launchPadBox}>
          <LaunchPad/>
        </div>
        <div className={style.launchPadBox}>
          <LaunchOverTime allLaunchesData={allLaunchesData}/>
        </div>
        <div className={style.launchPadBox}>
          <LaunchTimeline allLaunchesData={allLaunchesData}/>
        </div>
    </div>
  )
}




export default MapGraphTime