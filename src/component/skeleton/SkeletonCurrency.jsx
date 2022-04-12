import { Skeleton } from 'antd'
import React from 'react'

const SkeletonCurrency = () => {
  return (
    <div>
        <div style = {{display: 'flex', justifyContent: "space-between"}}>
            <div  style = {{width: "50%", marginLeft:"30px"}}>
                <Skeleton.Button active size= "large" block />
            </div>
            
            <div  style = {{width: "30%", marginRight:"80px"}}>
                <Skeleton.Button active size= "large" block />
            </div>
        </div>
        
        <br />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "22%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
          <div style = {{width: "20%"}}>
            <Skeleton active block paragraph = {{rows: 7}}/>
          </div>
          <div style = {{width: "22%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
          <div style = {{width: "23%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
        </div>
        <br />
       

        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "22%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
          <div style = {{width: "20%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
          <div style = {{width: "22%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
          <div style = {{width: "23%"}}>
            <Skeleton active block paragraph = {{rows: 7}} />
          </div>
        </div>
        
        <br />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "22%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "20%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "22%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "23%"}}>
            <Skeleton active block />
          </div>
        </div>

        <br />
        <br />
        <div style = {{display: "flex", justifyContent:"space-between"}}>
          <div style = {{width: "22%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "20%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "22%"}}>
            <Skeleton active block />
          </div>
          <div style = {{width: "23%"}}>
            <Skeleton active block />
          </div>
        </div>
    </div>
  )
}

export default SkeletonCurrency