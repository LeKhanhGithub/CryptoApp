import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './component';
import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';
import Forum from './component/Forum';
import Login from './component/chatApp/Login';
import Chats from './component/chatApp/Chats';
import {AuthProvider} from './component/chatApp/AuthContext'

ReactDOM.render(
    <Router> 
        <Routes>
            <Route path = "/" element = {<Provider store = {store} ><App /></Provider>}>
                <Route path = "/" element = {<Homepage />} />
                <Route path = "exchanges" element = {<Exchanges />} />
                <Route path = "cryptocurrencies" element = {<Cryptocurrencies />} />
                <Route path = 'crypto/:cointId' element = {<CryptoDetails />} />
                <Route path = "news" element = {<News />} />
            </Route>
            <Route path = "/forum" element = {<AuthProvider><Forum /></AuthProvider>}>
                    <Route path = "/forum" element = {<Login />} />
                    <Route path = "Chats" element = {<Chats />} />
            </Route>
            
            
        </Routes>
    </Router>,
    document.getElementById('root')
)