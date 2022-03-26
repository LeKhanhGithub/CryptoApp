import React, { useEffect, useState } from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import Loader from './Loader';
import {useGetCryptosQuery} from '../services/cryptoApi';
import { AnimatePresence, motion } from "framer-motion";
import Title from 'antd/lib/typography/Title';
import { CheckOutlined, HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Cryptocurrencies = ({simplified}) => {
  console.log("di vao currencies");
  const count = (simplified ? 10 : 100);
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    console.log("di vao useEffect");
    console.log("searchTerm: ", searchTerm);
    console.log("cryptosList: ", cryptosList);
    const filterDatas = cryptosList?.data?.coins.filter((coinItem) => {
        return coinItem.name.toLowerCase().includes(searchTerm?.toLowerCase())
    })
    console.log(filterDatas);
    setCryptos(filterDatas);
  }, [cryptosList, searchTerm])
  
  if(isFetching){
    return <Loader/>;
  }
  console.log(cryptos);
  const handleOnchange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      {
        !simplified &&(
          <motion.div className="search-crypto">
            <Row>
              <Col xs = {24} sm = {24} lg = {12}>
                  <Title className="CurrencyTitle">Cryptoscurrency in the world</Title>
              </Col>
              <Col className="Input">
                
                  <Input placeholder="Search Cryptocurrencies" value = {searchTerm} onChange = {( event ) => handleOnchange(event)}/>
              </Col>
              {console.log("di vao giao dien")}
            </Row>
          </motion.div>
        )
        
      }
      <motion.div layout>
      {console.log("di vao giao dien 2")}
      <AnimatePresence>
      <Row gutter = {[20, 20]} className = "crypto-card-container">
          {
            cryptos?.map((currency) => (
             
              <Col xs = {24} sm = {12} md ={11} lg = {6} className="crypto-card" key = {currency.uuid} >
                <motion.div
                  layout
                  initial = {{opacity: 0, scale: 0}}
                  animate = {{opacity: 1, scale: 1}}
                  exit = {{opacity: 0, scale: 0}}
                  transition = {{duration: 1}} 
                >
                  <Link to = {`/crypto/${currency.uuid}`} >
                    <Card 
                      title = {`${currency.rank}. ${currency.name}`}
                      extra = {<img className="crypto-image" src = {currency.iconUrl} alt = ""/>}
                      hoverable
                    >
                      <p>Price: {millify(currency.price)}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Change: {millify(Number(currency.change))}%</p>
                      <motion.div
                      initial = {{y: 100, opacity: 0.5}}
                      animate = {{y:0, opacity: 1}}
                      transition = {{duration:1, type: 'spring'}}
                      >
                      <HeartFilled className="add-watchList" />
                      </motion.div>
                     
                    </Card>
                  </Link>
                </motion.div>
              </Col>
             
            ))
          }
      </Row>
      </AnimatePresence>
      {console.log("di vao giao dien 3")}
      </motion.div>
    </>
  )
}

export default Cryptocurrencies