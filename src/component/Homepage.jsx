import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';
import {Cryptocurrencies, News} from '../component';
import Loader from './Loader';
import { AnimatePresence, motion } from "framer-motion";
import SkeletonHome from './skeleton/SkeletonHome';
import CarouselCrypto from './CarouselCrypto';


const {Title} = Typography;

const HomePage = () => {
  console.log('truy cap vao homepage');
  const {data, isFetching} = useGetCryptosQuery(20);
  const globalStats = data?.data?.stats;
  console.log(data);

  if(isFetching){
    return (
      <SkeletonHome/>
    )
    ;
  }

  return (
    <>
        <motion.div className="title-homepage"
          initial = {{y: "-100vh"}}
          animate = {{y: 0, color: "white"}}
          transition = {{duration: 2, type: "spring"}}
        >
        <Title level = {2} className = "heading" >Global Crypto Stats</Title>
        <Row>
          <Col span = {12}><Statistic title = "Total Cryptocurrencies" value = {globalStats.total} /></Col>
          <Col span = {12}><Statistic title = "Total Exchange" value = {millify(globalStats.totalExchanges)} /></Col>
          <Col span = {12}><Statistic title = "Total Market Cap" value = {millify(globalStats.totalMarketCap)} /></Col>
          <Col span = {12}><Statistic title = "Total 24h Volume" value = {millify(globalStats.total24hVolume)} /></Col>
          <Col span = {12}><Statistic title = "Total Markets" value = {millify(globalStats.totalMarkets)} /></Col>
        </Row>
        </motion.div>
        <div>
        {/* <CarouselCrypto /> */}
        </div>
        
        <div className="home-heading-container">
          <Title level = {2} className="home-title" >Top 10 Cryptocurrencies in the world</Title>
          <Title level = {3} className="show-more" ><Link to = {"/cryptocurrencies"} >Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified />

        <div className="home-heading-container">
          <Title level = {2} className="home-title" >Latest Crypto News</Title>
          <Title level = {3} className="show-more" ><Link to = {"/news"} >Show More</Link></Title>
        </div>
        <News simplified />

    </>
  )
}

export default HomePage