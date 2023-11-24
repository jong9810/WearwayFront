import React, {useState} from "react";
import styled from "styled-components"
import Plus from "../img/plus.png"
import Minus from "../img/minus.png"


const SidebarWrapper = styled.div`
  position: relative;
  vertical-align: top;
  padding: 10px;
  display: block;
  background-color: white;
  width: 260px;
  height: 100%;
  margin: 0;
  font-size: 12px;
  color: black;
  flex-direction: column;
  text-align: center;
  border-right-color: rgb(228, 228, 228);
  border-right-width: 1.5px;
  border-right-style: solid;
`

const Tablist = styled.div`
  background-color: white;
  cursor: pointer;
  height: 35px;
  font-size: 14px;
  width: 230px;
  padding: 0;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover{
    background-color: rgb(240, 240, 240);
  }
`

const TablistWrap = styled.div`
  width: 80px;
  margin:0px;
  display:inline-block;
  text-align: left;
`

const Hamburger = styled.div`
  background : ${(props) => ((props.hbg1 === props.hbg2) ? `url(${Minus})` : `url(${Plus})`)};
  height: 20px;
  width: 20px;
  flex-basis:18px;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  display: inline-block;
  margin-left: 105px;
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  vertical-align: top;
  background: transparent;
  margin-block-start: 0;
  clear: both;
  line-height: 35px;
  position: relative;
  font-size: 12px;
  color: rgb(228, 228, 228);
  justify-content: start;
  align-items: start;
  justify-items: start;
  width: 230px;
  max-height : ${(props) => {
      let childCnt = parseInt(props.children.length / 2);
      return (props.hbg1 === props.hbg2) ? `${childCnt * 40}px` : `0`;
  }};
  border-bottom-color: rgb(228,228,228);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-out;
  overflow: hidden;
`

const GridWrapper = styled.div`
  height: 5px;
  margin-left:10px;
  display:inline-block;
  text-align: left;
  color: rgb(10, 10, 10);
  font-size: 12px;
  &:hover{
    font-weight: bold;
  }
`
function Sidebar(props) {
    const [Menu, setMenu] = useState("None");
    const changeMenu = (props) => {
        if(Menu === props) setMenu("None");
        else setMenu(props);
        console.log("change");
    }

    return (
            <SidebarWrapper>
                <Tablist onClick={()=>changeMenu("인기")}><TablistWrap>인기</TablistWrap><Hamburger hbg1={Menu} hbg2={"인기"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"인기"}>
                    <a href="/"><GridWrapper>맨투맨</GridWrapper></a>
                    <a href="/"><GridWrapper>니트</GridWrapper></a>
                    <a href="/"><GridWrapper>트레이닝</GridWrapper></a>
                    <a href="/"><GridWrapper>후드 티셔츠</GridWrapper></a>
                    <a href="/"><GridWrapper>후드 티셔츠</GridWrapper></a>
                    <a href="/"><GridWrapper>후드 티셔츠</GridWrapper></a>

                </MenuGrid>
                <Tablist onClick={()=>changeMenu("상의")}><TablistWrap>상의</TablistWrap><Hamburger hbg1={Menu} hbg2={"상의"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"상의"}>
                    <a href="/"><GridWrapper>전체</GridWrapper></a>
                    <a href="/"><GridWrapper>니트</GridWrapper></a>
                    <a href="/"><GridWrapper>맨투맨</GridWrapper></a>
                    <a href="/"><GridWrapper>티셔츠</GridWrapper></a>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("아우터")}><TablistWrap>아우터</TablistWrap><Hamburger hbg1={Menu} hbg2={"아우터"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"아우터"}>
                    <a href="/"><GridWrapper>전체</GridWrapper></a>
                    <a href="/"><GridWrapper>코트</GridWrapper></a>
                    <a href="/"><GridWrapper>패딩</GridWrapper></a>
                    <a href="/"><GridWrapper>카디건</GridWrapper></a>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("바지")}><TablistWrap>바지</TablistWrap><Hamburger hbg1={Menu} hbg2={"바지"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"바지"}>
                    <a href="/"><GridWrapper>데님 팬츠</GridWrapper></a>
                    <a href="/"><GridWrapper>슬랙스</GridWrapper></a>
                    <a href="/"><GridWrapper>트레이닝</GridWrapper></a>
                    <a href="/"><GridWrapper>코튼 팬츠</GridWrapper></a>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("신발")}><TablistWrap>신발</TablistWrap><Hamburger hbg1={Menu} hbg2={"신발"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"신발"}>
                    <a href="/"><GridWrapper>전체</GridWrapper></a>
                    <a href="/"><GridWrapper>구두</GridWrapper></a>
                    <a href="/"><GridWrapper>샌들</GridWrapper></a>
                    <a href="/"><GridWrapper>슬리퍼</GridWrapper></a>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("기타")}><TablistWrap>기타</TablistWrap><Hamburger hbg1={Menu} hbg2={"기타"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"기타"}>
                    <a href="/Category"><GridWrapper>전체</GridWrapper></a>
                    <a href="/"><GridWrapper>안경</GridWrapper></a>
                    <a href="/"><GridWrapper>속옷</GridWrapper></a>
                    <a href="/"><GridWrapper>양말</GridWrapper></a>
                </MenuGrid>
            </SidebarWrapper>
    )
}

export default Sidebar;