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



function Header(props) {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
            <Wrapper>
                <a href="/" style={{textDecoration: "none"}}>
                    <Logo>WEARWAY</Logo>
                </a>
                <Search />
            </Wrapper>
    )
}

export default Header;