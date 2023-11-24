import React from "react";
import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  height: 55px;
  border-bottom: 1.5px solid rgb(208, 208, 208);
  flex-direction: row;
  align-items: center;
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
const Menu = styled.span`
  color: black;
  padding: 10px;
  font-size: 12px;
  font-weight: normal;
  &:hover{
    text-decoration: underline;
  }
`
function WhiteHeader(props) {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    }
    return (
            <Wrapper>
                <Login onClick={navigateToLogin}>로그인</Login>
                <Link to="/mypage"><Menu>마이페이지</Menu></Link>
                <Link to="/cart"><Menu>장바구니</Menu></Link>
                <Link to="/order"><Menu>주문배송조회</Menu></Link>
                <Link to="/service"><Menu>고객센터</Menu></Link>
            </Wrapper>
    )
}

export default WhiteHeader;