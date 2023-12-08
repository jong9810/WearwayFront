import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  margin-left: 50px;
  font-size: 25px;
  color: white;
`;

const HeaderMenu = styled.span`
  font-size: 15px;
  color: white;
  margin-left: 15px;
`;

function MyInformHeader(props) {
    return (
        <Header>
            <Link to={"/mypage"}><HeaderTitle>My Page</HeaderTitle></Link>
            <div>
                <Link to={"/cart"}><HeaderMenu>장바구니</HeaderMenu></Link>
                <Link to={"/service"}><HeaderMenu>고객센터</HeaderMenu></Link>
                <Link to={"/main"}><HeaderMenu style={{marginRight: "50px"}}>로그아웃</HeaderMenu></Link>
            </div>
        </Header>
    );
}

export default MyInformHeader;