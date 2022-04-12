import { Skeleton } from 'antd'
import React from 'react'

const SkeletonCryptoDetails = () => {
  return (
    <div>
        <br />
        <br />

        <div style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style = {{width: "30%"}}>
                <Skeleton.Input active size= "large" block />
            </div>
            <br />
            <br />
            <div style = {{width: "50%"}}>
                <Skeleton.Input active size= "small" block />
            </div>
        </div>
        
        <div>
          <Skeleton.Input active size= "large" />
        </div>
        <br />

        <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: "flex-end"}}>
          <div style = {{width: "30%"}}>
              <Skeleton.Input active size= "large" block />
          </div>
          <div style = {{width: "40%"}}>
              <Skeleton.Input active block />
          </div>
        </div>
        <br />
        <br />

        <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style = {{width: "5%"}}>
              <Skeleton.Button active block size= "small" />
          </div>
          <div style = {{width: "5%", marginLeft: "3px"}}>
              <Skeleton.Button active block size= "small" />
          </div>
        </div>

        <div style = {{marginTop: "10px"}}>
          <div style = {{display: "flex",flexDirection: "column", justifyContent: "space-around"}}>
            <Skeleton.Button active block size= "large"  />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large"  />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
            <Skeleton.Button active block size= "large" />
           
          </div>
          
        </div>
        
        
        
    </div>
  )
}

export default SkeletonCryptoDetails