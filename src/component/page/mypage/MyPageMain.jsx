import React from 'react';
import styled from "styled-components";
import OrderListOptPage from "./orderlistoptpage/OrderListOptPage";
import ViewedGoodsPage from "./viewedgoodspage/ViewedGoodsPage";
import FavoriteGoodsPage from "./favoritegoodspage/FavoriteGoodsPage";
import ReviewPage from "./reviewpage/ReviewPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;

function MyPageMain(props) {
    let page = null;
    if (props.menu === "order_list_opt") {
        page = <OrderListOptPage />;
    } else if (props.menu === "write_review") {
        page = <ReviewPage menu={"write_review"}/>;
    } else if (props.menu === "review_history") {
        page = <ReviewPage menu={"review_history"}/>;
    } else if (props.menu === "viewed_goods") {
        page = <ViewedGoodsPage />;
    } else if (props.menu === "favorite_goods") {
        page = <FavoriteGoodsPage />;
    }

    return (
        <Wrapper>
            {page}
        </Wrapper>
    );
}

export default MyPageMain;