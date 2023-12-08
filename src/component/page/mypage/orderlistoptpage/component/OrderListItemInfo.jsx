import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import ItemImg from '../../../../img/ItemImg.png'

// Todo
// 1) OrderListOptPage : OrderListItem, OrderListStatus 완성하기
// 2) FavoriteGoodsPage -> ViewedGoodsPage -> WriteReviewPage 완성하기

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemImgTag = styled.img`
    height: 100px;
`;

const ItemInfoWrap = styled.ul`
  margin-left: 2px;
  list-style: none;
`;

const Li1 = styled.li`
  font-size: 15px;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Li2 = styled(Li1)`
  font-weight: bold;
`;

const Li3 = styled.li`
  color: #777777;
`;

function OrderListItemInfo(props) {
    return (
        <Wrapper>
            <ItemImgTag src={ItemImg} alt={""} />
            <ItemInfoWrap>
                <Link to={""}><Li1>{"브랜드"}</Li1></Link>
                <Link to={""}><Li2>{"상품명"}</Li2></Link>
                <Li3>&nbsp;&nbsp;옵션 : {"M"}</Li3>
            </ItemInfoWrap>
        </Wrapper>
    );
}

export default OrderListItemInfo;