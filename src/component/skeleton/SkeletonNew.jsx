import { Skeleton } from 'antd'
import React from 'react'

const SkeletonNew = () => {
  return (
    <div>
        <Skeleton.Input active size= "large" />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "30%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
        </div>
        <br />
        <br />

        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "30%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
        </div>
        
        <br />
        <br />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "30%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
        </div>

        <br />
        <br />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "30%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "33%"}}>
            <Skeleton active block />
          </div>
        </div>
    </div>
  )
}

export default SkeletonNew