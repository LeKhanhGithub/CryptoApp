import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";

import { auth } from './firebase';
import ParticlesBubble from '../ParticlesBubble';
import MenuToggle from '../menuToggle/MenuToggle';
import { motion } from "framer-motion";

const loginVariant = {
    hidden: {
        y: "-100vh", 
        translateY: "-50%"
    },
    visible: {
        x: 0, y: 0, 
        translateX: "-50%", 
        translateY: "-50%",
        transition: {
            duration: 2, 
            type: "spring",
            when: "beforeChildren",
            staggerChildren: .4
        }
    }
}

const titleVariant = {
    hidden: {
        y: "-100vh",

    },
    visible: {
        y: -10,
        transition: {
            duration: 3, 
            type: "spring"
        }
    },
    hover: {
        scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1], 
        opacity: .3, text: "hiii", 
        textShadow: "0px 0px 8px rgb(255, 255, 255)", 
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",  
        transition: {
            duration: 1, 
            repeat: Infinity, 
            repeatType: 'reverse'
        }
    }
}

const googleVariant = {
    hidden : {
        opacity: 0, 
        y: "100vh"
    },
    hiddenFace : {
        opacity: 0, 
        y: "100vh"
    },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: .3,
            duration: 2, 
            type: 'spring'
        }
    },
    hover: {
        scale: [1.1, 1], 
        textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)", 
        transition: {
            duration: .5, 
            repeat: Infinity, 
            repeatType: 'reverse'
        }
    }
}

const Login = () => {
    
  return (
    <div id = "login-page">
        <ParticlesBubble/>
        <motion.div id = "login-card"
            variants = {loginVariant}
            initial = "hidden"
            animate = "visible"
        >
            <motion.h2 className="visible"
                variants = {titleVariant}
                initial = "hidden"
                animate = "visible"
                whileHover = "hover"
            >   
                Welcome To Crypto Community!
            </motion.h2>

            <motion.div
                variants = {googleVariant}
                initial = "hidden"
                animate = "visible"
                whileHover = "hover"              
                className = "login-button google"
                onClick = { () => signInWithRedirect(auth, new GoogleAuthProvider())}
            >
                <GoogleOutlined /> Sign in with Google
            </motion.div>

            <br /> <br />

            <motion.div
                variants = {googleVariant}
                initial = "hiddenFace"
                animate = "visible"
                whileHover = "hover"
                className = "login-button facebook"
                onClick = { () => signInWithRedirect(auth, new FacebookAuthProvider())}
            >
                <FacebookOutlined /> Sign in with Facebook
            </motion.div>

            <MenuToggle />

        </motion.div>
    </div>
  )
}

export default Login