import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import "./menuToggle.css"

const MenuToggle = () => {

    useEffect(() =>{
        document.querySelector(".hamburger").addEventListener('click', () => {
            document.querySelector(".nav").classList.toggle("open");
          });
    })
  return (
    <div className="menu">
        <div class="nav">
            <div class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            
            <div class="item" >
                <HomeOutlined />
            </div>
            <div class="item" >
                <FundOutlined />
            </div>
            <div class="item">
                <MoneyCollectOutlined />
            </div>
            <div class="item" >
                <BulbOutlined />
            </div>
        </div>

    </div>
  )
}

export default MenuToggle