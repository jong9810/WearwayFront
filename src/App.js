import React from "react";
import GlobalStyles from '../src/component/styles/GlobalStyles'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// Pages
import MainPage from './component/page/MainPage';
import Header from "./component/ui/Header";
import LoginPage from "./component/page/LoginPage";
import OrderPage from "./component/page/OrderPage";
import ServicePage from "./component/page/ServicePage";
import MyPage from "./component/page/MyPage";
import Cart from "./component/page/Cart";
import Category from "./component/page/CategoryPage"

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
                    <Route path="/categories/item/:categorynumber" element={<Category />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;