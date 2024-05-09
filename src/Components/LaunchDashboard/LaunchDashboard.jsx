import React, { useEffect } from 'react'
import style from './LaunchDasboard.module.css'
import { Box, Typography, Skeleton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { pastLaunch, upcomingLaunch } from '../../Redux/Service/Launch.Service'

const LaunchDashboard = () => {
  const dispatch = useDispatch()
  const launchLength = useSelector(state => state.launch)

  useEffect(() => {
    dispatch(upcomingLaunch())
    dispatch(pastLaunch())
  }, [])

  if (launchLength.isFetching) {
    return (
      <div className={style.LaunchDashboardBox}>
        LaunchDashboard
        <Box className={style.ValuesContainer}>
          <StyledSkeleton />
          <StyledSkeleton />
          <StyledSkeleton />
        </Box>
      </div>
    )
  }

  return (
    <div className={style.LaunchDashboardBox}>
      LaunchDashboard
      <Box className={style.ValuesContainer}>
        <ValueBox
          value={launchLength?.upcomingData}
          label='Upcoming'
          bgColor='#ffadad'
        />
        <ValueBox
          value={launchLength?.pastData}
          label='Past'
          bgColor='#ffd6a5'
        />
        <ValueBox
          value={launchLength?.upcomingData + launchLength?.pastData}
          label='Total'
          bgColor='#caffbf'
        />
      </Box>
    </div>
  )
}

const ValueBox = ({ value, label, bgColor }) => {
  return (
    <Box className={style.ValueBox} style={{ backgroundColor: bgColor }}>
      <Typography variant='h5'>{value}</Typography>
      <Typography variant='subtitle1'>{label}</Typography>
    </Box>
  )
}

const StyledSkeleton = () => (
  <Box
    className={style.ValueBox}
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
  >
    <Skeleton variant='text' width={60} height={40} />
    <Skeleton variant='text' width={120} height={20} />
  </Box>
)

export default LaunchDashboard
