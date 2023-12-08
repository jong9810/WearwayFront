import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: block;
  padding-left: 100px;
`;

const MenuWrap = styled.div`
  width: 160px;
`;

const MenuTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const SelectedMenu = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Menu = styled(SelectedMenu)`
  color: #6e6e6e;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

function MyPageSidebar(props) {
    return (
        <Wrapper>
            <MenuWrap>
                <MenuTitle>나의 쇼핑 활동</MenuTitle>
                <Link to={"/mypage/order_list_opt"}><SelectedMenu>주문 내역 조회</SelectedMenu></Link>
                <Link to={"/mypage/review/write_review"}><Menu>구매 후기</Menu></Link>
                <Link to={"/mypage/viewed_goods"}><Menu>최근 본 상품</Menu></Link>
                <Link to={"/mypage/favorite_goods"}><Menu>좋아요</Menu></Link>
                <Link to={"/mypage"}><Menu>결제 카드 관리</Menu></Link>
                <Link to={"/member/benefit"}><Menu>회원 혜택</Menu></Link>
            </MenuWrap>
        </Wrapper>
    )
}

export default MyPageSidebar;