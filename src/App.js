import React from 'react'
import './App.css';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './component';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout, Space, Typography } from 'antd';
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (
    <div className="app">
        <motion.div className="navbar"
          initial = {{y: "-100vh"}}
          animate = {{y: 0}}
          transition = {{duration: 1, type: 'spring'}}
        >
            <Navbar />    
        </motion.div>
        <div className="main">
          <Layout>
            <AnimatePresence>
            <motion.div className="routes" 
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{duration: 2, type: 'spring'}}
            >
              <Outlet />
            </motion.div>
            </AnimatePresence>
          </Layout>
          <div className="footer" >
            <Typography.Title level = {5} style = {{color: 'white', textAlign: 'center'}}>
              Cryptoverse <br />
              All rights reserverd
            </Typography.Title>
            <Space>
              <Link to = {"/"} >Home</Link>
              <Link to = {"/exchanges"} >Exchanges</Link>
              <Link to = {"/news"} >News</Link>
            </Space>
        </div>
      </div>
    </div>
  )
}

export default App