import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectionOutlined, BulbOutlined, FundOutlined, MenusOutlined, MoneyCollectOutlined, MenuOutlined, CommentOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { motion } from "framer-motion";


const Navbar = () => {

  const [active, setActive] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    //clean
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize < 768){
      setActive(false);
    }
    else{
      setActive(true);;
    }
  }, [screenSize]);

  console.log(active);
  return (
    <div className="nav-container">
        <motion.div className="logo-container"
           initial = {{y: "-100vh"}}
           animate = {{y: 0}}
           transition = {{duration: 2, type: 'spring'}}
        >
            <Avatar src = {icon} size = "large" />
            <Typography.Title level = {2} className="logo">
                <Link to={"/"} >Cryptoverse</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick = {() => setActive(!active)}>
              <MenuOutlined />
            </Button>
        </motion.div>
        {active && (
          <motion.div
            initial = {{x: "-100vw"}}
            animate = {{x: 0}}
            transition = {{duration: 3, type: 'spring'}}
          >
            <Menu theme = "dark">
            
            <Menu.Item icon = {<HomeOutlined />}>
              <Link to = {"/"} >Home</Link>
            </Menu.Item>
            <Menu.Item icon = {<FundOutlined />}>
              <Link to = {"/cryptocurrencies"} >Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon = {<MoneyCollectOutlined />}>
              <Link to = {"/exchanges"} >Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon = {<BulbOutlined />}>
              <Link to = {"/news"} >News</Link>
            </Menu.Item>
            <Menu.Item icon = {<CommentOutlined />}>
              <Link to = {"/forum"} >Forums</Link>
            </Menu.Item>
          </Menu>
          </motion.div>
        )}
     
    </div>
  )
}

export default Navbar