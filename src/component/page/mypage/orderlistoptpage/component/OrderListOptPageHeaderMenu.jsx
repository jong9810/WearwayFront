import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeaderMenuWrap = styled.div`
  margin-bottom: 15px;
`;

const HeaderMenu = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 15px;
  color: #c8c8c8;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function OrderListOptPageHeaderMenu(props) {
    return (
        <HeaderMenuWrap>
            <HeaderMenu>입금/결제{0}</HeaderMenu>
            <HeaderMenu>배송중/픽업대기{0}</HeaderMenu>
            <HeaderMenu>배송완료/픽업완료{0}</HeaderMenu>
            <HeaderMenu>구매확정{0}</HeaderMenu>
            <HeaderMenu>교환{0}</HeaderMenu>
            <HeaderMenu>교환완료{0}</HeaderMenu>
            <HeaderMenu>환불{0}</HeaderMenu>
            <HeaderMenu>환불완료{0}</HeaderMenu>
        </HeaderMenuWrap>
    );
}

export default OrderListOptPageHeaderMenu;