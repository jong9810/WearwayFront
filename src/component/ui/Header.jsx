import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Wrapper2 = styled.div`
  background-color: white;
  display: flex;
  height: 55px;
  border-bottom: 0.5px solid grey;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.span`
  color: white;
  margin-right: 20px;
  font-size: 25px;
  margin: 20px;
  font-weight: 500;
`

const Search = styled.input`
  display: table-cell;
  vertical-align: middle;
  padding: 5px;
  margin: 10px;
  width: 200px;
`

const Menu = styled.span`
  color: black;
  padding: 10px;
  font-size: 15px;
  font-weight: normal;
  &:hover{
    text-decoration: underline;
  }
`
const Login = styled.button`
  height: 30px;
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  border-width: 1px;
  &:hover{
    background-color: black;
    color: white;
  }
`

function Header(props) {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div>
            <Wrapper>
                <a href="/" style={{textDecoration: "none"}}>
                    <Logo>WEARWAY</Logo>
                </a>
                <Search />
            </Wrapper>
            <Wrapper2>
                <Login onClick={navigateToLogin}>로그인</Login>
                <a href="/mypage"><Menu>마이페이지</Menu></a>
                <a href="/cart"><Menu>장바구니</Menu></a>
                <a href="/order"><Menu>주문배송조회</Menu></a>
                <a href="/service"><Menu>고객센터</Menu></a>
            </Wrapper2>
        </div>
    )
}

export default Header;