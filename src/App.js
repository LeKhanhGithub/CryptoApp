import { Layout, Space, Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component";

const ContainerVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      when: "beforeChildren",
    },
  },
};

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const App = () => {
  return (
    <div className="app">
      <motion.div
        className="navbar"
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
      </motion.div>
      <div className="main">
        <Layout>
          <AnimatePresence>
            <motion.div
              className="routes"
              variants={mainVariants}
              initial="hidden"
              animate="visible"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
