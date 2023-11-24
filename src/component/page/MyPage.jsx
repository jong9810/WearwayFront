import React from "react";
import styled from "styled-components";
import MyInform from "./mypage/ui/MyInform";
import MyPageSidebar from "./mypage/ui/MyPageSidebar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 100%;
`;

function MyPage(props) {
    return (
        <Wrapper>
            <HeaderWrapper>
                <MyInform />
            </HeaderWrapper>
            <BodyWrapper>
                <MyPageSidebar />
            </BodyWrapper>
        </Wrapper>
    );
}

export default MyPage;