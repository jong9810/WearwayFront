import React from "react";
import GlobalStyles from '../src/component/styles/GlobalStyles'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// Pages
import MainPage from './component/page/MainPage';
import Header from "./component/ui/Header";
import LoginPage from "./component/page/LoginPage";
import OrderPage from "./component/page/OrderPage";
import ServicePage from "./component/page/ServicePage";
import MyPage from "./component/page/mypage/MyPage";
import Cart from "./component/page/Cart";
import Category from "./component/page/CategoryPage"

function App(props) {
    return(
        <BrowserRouter>
            <GlobalStyles />
                <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/categories/item/:categorynumber" element={<Category />} />
                    <Route path={"/mypage/order_list_opt"} element={<MyPage menu={"order_list_opt"} />} />
                    <Route path={"/mypage/review/write_review"} element={<MyPage menu={"write_review"} />} />
                    <Route path={"/mypage/review/review_history"} element={<MyPage menu={"review_history"} />} />
                    <Route path={"/mypage/viewed_goods"} element={<MyPage menu={"viewed_goods"} />} />
                    <Route path={"/mypage/favorite_goods"} element={<MyPage menu={"favorite_goods"} />} />
                    <Route path={"/member/benefit"} element={<MyPage menu={"benefit"} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;