import { Skeleton } from 'antd'
import React from 'react'

const SkeletonHome = () => {
  return (
    <div>
        <div>
            <Skeleton.Input active size= "large" />
            <div style = {{display: "flex"}} >
                <div style = {{width: "35%"}}>
                    <Skeleton paragraph={{ rows: 5 }} />
                </div>
                
                <div style = {{width: "35%", marginLeft: "70px"}}>
                    <Skeleton paragraph={{ rows: 3 }} />
                </div>
            </div>
            
        </div>
        <br/>
        <br />
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Skeleton.Input active size= "large" />
                <Skeleton.Button active size= "large" />
                
            </div>
            <br/>
            <div style = {{display: "flex", justifyContent:"space-between"}}>
                <div style = {{width: "20%"}}>
                    <Skeleton active block paragraph = {{rows: 7}} />
                </div>
                <div style = {{width: "22%"}}>
                    <Skeleton active block paragraph = {{rows: 7}}/>
                </div>
                <div style = {{width: "20%"}}>
                    <Skeleton active block paragraph = {{rows: 7}} />
                </div>
                <div style = {{width: "22%"}}>
                    <Skeleton active block paragraph = {{rows: 7}}/>
                </div>
            </div>
            <br/>
            <div style = {{display: "flex", justifyContent:"space-between"}}>
                <div style = {{width: "20%"}}>
                    <Skeleton active block />
                </div>
                <div style = {{width: "22%"}}>
                    <Skeleton active block />
                </div>
                <div style = {{width: "20%"}}>
                    <Skeleton active block />
                </div>
                <div style = {{width: "22%"}}>
                    <Skeleton active block />
                </div>
            </div>
        </div>
        
        <br />
        <br />
        
        <Skeleton loading paragraph={{ rows: 3 }} />
        <Skeleton loading paragraph={{ rows: 2 }} width={{ rows: 2 }} height={{ rows: 2 }}/>
        <Skeleton loading />
        <Skeleton loading />
        
    </div>
  )
}

export default SkeletonHome