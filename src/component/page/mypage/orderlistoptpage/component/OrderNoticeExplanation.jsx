import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeaderContentUl = styled.ul`
  padding-left: 20px;
`;

const HeaderContentLi = styled.li`
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  margin-bottom: 10px;
`;

function OrderNoticeExplanation(props) {
    return (
        <HeaderContentUl>
            <HeaderContentLi>픽업대기, 픽업완료는 무탠픽업(매장픽업) 주문에만 해당됩니다.</HeaderContentLi>
            <HeaderContentLi>동일한 주문번호라도 2개 이상의 브랜드에서 주문하신 경우 출고지 주소가 달라 각각 출고됩니다. (택배 박스를 2개 이상 수령 가능)</HeaderContentLi>
            <HeaderContentLi>출고 완료 직후 교환 / 환불 요청을 하더라도 상품을 수령하신 후 택배 업체를 통해 보내주셔야 처리 가능합니다.</HeaderContentLi>
        </HeaderContentUl>
    );
}

export default OrderNoticeExplanation;