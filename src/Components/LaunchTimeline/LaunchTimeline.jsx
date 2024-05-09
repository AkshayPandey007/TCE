import React from 'react'
import style from './LaunchTimeline.module.css'

const LaunchTimeline = ({ allLaunchesData }) => {
  const colors = ['#800080', '#ff8c00', '#008000', '#0000FF', '#000000']
  return (
    <div className={style.LaunchTimelineBox}>
        Launch Timeline
      {allLaunchesData?.allLaunchesData.map((el, index) => (
        <div
          style={{
            display: 'flex',
            gap: '30px',
            marginTop: '10px'
          }}
          key={index}
        >
          <div
            className={style.circleBox}
            style={{ border: `2px solid ${colors[index % colors.length]}` }}
          ></div>
          {el?.launch_date_utc}
        </div>
      ))}
    </div>
  )
}

export default LaunchTimeline
