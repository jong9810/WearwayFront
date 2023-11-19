import React from "react";
import styled from "styled-components"
import Image from "../img/img1.ico"

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  filter: invert(100%);
  height: 40px;
  width: 200px;
`

const Search = styled.input`
  display: table-cell;
  vertical-align: middle;
  padding: 5px;
  margin: 10px;
  width: 200px;
`

const Menu = styled.span`
  color: white;
  margin-right: 20px;
  font-size: 25px;
  font-weight: bold;
`
function Header(props) {
    return (
        <Wrapper>
            <Wrapper>
                <a href="/">
                    {/*<Logo src={Image} />*/}
                    <a href="/"><Menu>WEARWAY</Menu></a>
                </a>
                <Search />
            </Wrapper>
            <Wrapper>
                <a href="/"><Menu>랭킹</Menu></a>
                <a href="/"><Menu>업데이트</Menu></a>
                <a href="/"><Menu>코디</Menu></a>
                <a href="/"><Menu>세일</Menu></a>
                <a href="/"><Menu>스페셜</Menu></a>
            </Wrapper>
        </Wrapper>

    )
}

export default Header;