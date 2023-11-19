import React, {useEffect, useState} from "react";
import GlobalStyles from '../src/component/styles/GlobalStyles'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import Header from "./component/ui/Header";
import LoginPage from "./component/page/LoginPage";
import OrderPage from "./component/page/OrderPage";
import ServicePage from "./component/page/ServicePage";
import MyPage from "./component/page/MyPage";
import Cart from "./component/page/Cart";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return(
        <BrowserRouter>
            <div className="App">
                <GlobalStyles />
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/service" element={<ServicePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;