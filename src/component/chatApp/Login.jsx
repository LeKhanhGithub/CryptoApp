import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";

import { auth } from './firebase';
import ParticlesBubble from '../ParticlesBubble';
import MenuToggle from '../menuToggle/MenuToggle';
import { motion } from "framer-motion";


const Login = () => {
    
  return (
    <div id = "login-page">
        <ParticlesBubble/>
        <motion.div id = "login-card"
            initial = {{y: "-100vh", translateY: "-50%"}}
            animate = {{x: 0, y: 0, translateX: "-50%", translateY: "-50%"}}
            transition = {{duration: 2, type: "spring"}}
        >
            <motion.h2 className="visible"
                initial = {{ y: "-100vh"}}
                animate = {{ y: -10}}
                transition = {{duration: 2, type: "spring"}}
                whileHover = {{scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1], opacity: .3, text: "hiii", textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)",  transition: {duration: 1, repeat: Infinity, repeatType: 'reverse'}}}
                // transition = {{duration: .5, repeat: Infinity, repeatType: 'reverse'}}
            >   
                Welcome To Crypto Community!
            </motion.h2>

            <motion.div
                initial = {{opacity: 0, x: "-100vW"}}
                animate = {{opacity: 1, x: 0}}
                transition = {{duration: 1, delay: .5, type: 'spring'}}
                whileHover = {{scale: [1.1, 1], textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {duration: .5, repeat: Infinity, repeatType: 'reverse'}}}
                
                className = "login-button google"
                onClick = { () => signInWithRedirect(auth, new GoogleAuthProvider())}
            >
                <GoogleOutlined /> Sign in with Google
            </motion.div>

            <br /> <br />

            <motion.div
                initial = {{opacity: 0, x: "100vw"}}
                animate = {{opacity: 1, x: 0 }}
                transition = {{duration: 5, delay: 1, type: 'spring'}}
                whileHover = {{scale: [1.1, 1], textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {duration: .5, repeat: Infinity, repeatType: 'reverse'}}}
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