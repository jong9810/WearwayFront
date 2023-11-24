import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100%;
`;

const MyPageMenu = styled.div` 
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 25px;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;


function MyPageSidebar(props) {
    return (
        <SideBarWrapper>
            <div style={{fontSize: "20px", fontWeight: "700", marginTop: "50px", marginBottom: "25px"}}>나의 쇼핑 활동</div>
            <a href={"/mypage"}><MyPageMenu>주문 내역 조회</MyPageMenu></a>
            <a href={"/mypage"}><MyPageMenu>구매 후기</MyPageMenu></a>
            <a href={"/mypage"}><MyPageMenu>최근 본 상품</MyPageMenu></a>
            <a href={"/mypage"}><MyPageMenu>좋아요</MyPageMenu></a>
            <a href={"/mypage"}><MyPageMenu>결제 카드 관리</MyPageMenu></a>
            <a href={"/mypage"}><MyPageMenu>회원 혜택</MyPageMenu></a>
        </SideBarWrapper>
    )
}

export default MyPageSidebar;