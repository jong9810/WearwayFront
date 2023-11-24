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
import FavoriteGoodsPage from "./component/page/mypage/page/FavoriteGoodsPage";
import ViewedGoodsPage from "./component/page/mypage/page/ViewedGoodsPage";
import OrderListOptPage from "./component/page/mypage/page/OrderListOptPage";
import WriteReviewPage from "./component/page/mypage/page/WriteReviewPage";
import MemberBenefitPage from "./component/page/MemberBenefitPage";

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
                    <Route path={"/mypage/order_list_opt"} element={<OrderListOptPage />} />
                    <Route path={"/mypage/review/write_review"} element={<WriteReviewPage />} />
                    <Route path={"/mypage/viewed_goods"} element={<ViewedGoodsPage />} />
                    <Route path={"/mypage/favorite_goods"} element={<FavoriteGoodsPage />} />
                    <Route path={"/member/benefit"} element={<MemberBenefitPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;