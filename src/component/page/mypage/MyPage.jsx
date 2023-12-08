import React from "react";
import styled from "styled-components";
import MyInform from "../component/MyInform";
import MyPageSidebar from "../component/MyPageSidebar";
import MyPageMain from "./MyPageMain";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function MyPage(props) {
    return (
        <Wrapper>
            <Header>
                <MyInform />
            </Header>
            <Body>
                <MyPageSidebar />
                <MyPageMain menu={props.menu} />
            </Body>
        </Wrapper>
    );
}

export default MyPage;