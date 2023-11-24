import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"
import Plus from "../img/plus.png"
import Minus from "../img/minus.png"


const SidebarWrapper = styled.div`
  position: relative;
  vertical-align: top;
  padding: 10px;
  display: block;
  background-color: white;
  width: 270px;
  height: 100%;
  margin: 0;
  font-size: 12px;
  color: black;
  flex-direction: column;
  text-align: center;
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
  color: rgb(208, 208, 208);
  justify-content: start;
  align-items: start;
  justify-items: start;
  width: 230px;
  max-height : ${(props) => {
      let childCnt = parseInt((props.children.length + 1) / 2);
      return (props.hbg1 === props.hbg2) ? `${childCnt * 40}px` : `0`;
  }};
  border-bottom-color: rgb(208,208,208);
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
                    <Link to="/categories/item/00102" state={{category: "Top", subCategory: "맨투맨", categoryNumber: "001",subCategoryNumber: "00102"}}><GridWrapper>맨투맨</GridWrapper></Link>
                    <Link to="/categories/item/00101" state={{category: "Top", subCategory: "니트", categoryNumber: "001", subCategoryNumber: "00101"}}><GridWrapper>니트</GridWrapper></Link>
                    <Link to="/categories/item/00303" state={{category: "Pants", subCategory: "트레이닝", categoryNumber: "003", subCategoryNumber: "00303"}}><GridWrapper>트레이닝</GridWrapper></Link>
                    <Link to="/categories/item/00104" state={{category: "Top", subCategory: "후드 티셔츠", categoryNumber: "001", subCategoryNumber: "00104"}}><GridWrapper>후드 티셔츠</GridWrapper></Link>
                    <Link to="/categories/item/00301" state={{category: "Pants", subCategory: "데님 팬츠", categoryNumber: "003", subCategoryNumber: "00301"}}><GridWrapper>데님 팬츠</GridWrapper></Link>
                    <Link to="/categories/item/00304" state={{category: "Pants", subCategory: "코튼 팬츠", categoryNumber: "003", subCategoryNumber: "00304"}}><GridWrapper>코튼 팬츠</GridWrapper></Link>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("상의")}><TablistWrap>상의</TablistWrap><Hamburger hbg1={Menu} hbg2={"상의"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"상의"}>
                    <Link to="/categories/item/001" state={{category: "Top", categoryNumber: "001"}}><GridWrapper>전체</GridWrapper></Link>
                    <Link to="/categories/item/00101" state={{category: "Top", subCategory: "니트", categoryNumber: "001", subCategoryNumber: "00101"}}><GridWrapper>니트</GridWrapper></Link>
                    <Link to="/categories/item/00102" state={{category: "Top", subCategory: "맨투맨", categoryNumber: "001",subCategoryNumber: "00102"}}><GridWrapper>맨투맨</GridWrapper></Link>
                    <Link to="/categories/item/00103" state={{category: "Top", subCategory: "티셔츠", categoryNumber: "001",subCategoryNumber: "00103"}}><GridWrapper>티셔츠</GridWrapper></Link>
                    <Link to="/categories/item/00104" state={{category: "Top", subCategory: "후드 티셔츠", categoryNumber: "001",subCategoryNumber: "00104"}}><GridWrapper>후드 티셔츠</GridWrapper></Link>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("아우터")}><TablistWrap>아우터</TablistWrap><Hamburger hbg1={Menu} hbg2={"아우터"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"아우터"}>
                    <Link to="/categories/item/002" state={{category: "Outer", categoryNumber: "002"}}><GridWrapper>전체</GridWrapper></Link>
                    <Link to="/categories/item/00201" state={{category: "Outer", subCategory: "코트", categoryNumber: "002", subCategoryNumber: "00201"}}><GridWrapper>코트</GridWrapper></Link>
                    <Link to="/categories/item/00202" state={{category: "Outer", subCategory: "패딩", categoryNumber: "002", subCategoryNumber: "00202"}}><GridWrapper>패딩</GridWrapper></Link>
                    <Link to="/categories/item/00203" state={{category: "Outer", subCategory: "가디건", categoryNumber: "002", subCategoryNumber: "00203"}}><GridWrapper>카디건</GridWrapper></Link>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("바지")}><TablistWrap>바지</TablistWrap><Hamburger hbg1={Menu} hbg2={"바지"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"바지"}>
                    <Link to="/categories/item/003" state={{category: "Pants", categoryNumber: "003"}}><GridWrapper>전체</GridWrapper></Link>
                    <Link to="/categories/item/00301" state={{category: "Pants", subCategory: "데님 팬츠", categoryNumber: "003", subCategoryNumber: "00301"}}><GridWrapper>데님 팬츠</GridWrapper></Link>
                    <Link to="/categories/item/00302" state={{category: "Pants", subCategory: "슬랙스", categoryNumber: "003", subCategoryNumber: "00302"}}><GridWrapper>슬랙스</GridWrapper></Link>
                    <Link to="/categories/item/00303" state={{category: "Pants", subCategory: "트레이닝", categoryNumber: "003", subCategoryNumber: "00303"}}><GridWrapper>트레이닝</GridWrapper></Link>
                    <Link to="/categories/item/00304" state={{category: "Pants", subCategory: "코튼 팬츠", categoryNumber: "003", subCategoryNumber: "00304"}}><GridWrapper>코튼 팬츠</GridWrapper></Link>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("신발")}><TablistWrap>신발</TablistWrap><Hamburger hbg1={Menu} hbg2={"신발"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"신발"}>
                    <Link to="/categories/item/004" state={{category: "Shoes", categoryNumber: "004"}}><GridWrapper>전체</GridWrapper></Link>
                    <Link to="/categories/item/00401" state={{category: "Shoes", subCategory: "구두", categoryNumber: "004", subCategoryNumber: "00401"}}><GridWrapper>구두</GridWrapper></Link>
                    <Link to="/categories/item/00402" state={{category: "Shoes", subCategory: "샌들", categoryNumber: "004", subCategoryNumber: "00402"}}><GridWrapper>샌들</GridWrapper></Link>
                    <Link to="/categories/item/00403" state={{category: "Shoes", subCategory: "슬리퍼", categoryNumber: "004", subCategoryNumber: "00403"}}><GridWrapper>슬리퍼</GridWrapper></Link>
                </MenuGrid>
                <Tablist onClick={()=>changeMenu("기타")}><TablistWrap>기타</TablistWrap><Hamburger hbg1={Menu} hbg2={"기타"}></Hamburger></Tablist>
                <MenuGrid hbg1={Menu} hbg2={"기타"}>
                    <Link to="/categories/item/005" state={{category: "Etc", categoryNumber: "005"}}><GridWrapper>전체</GridWrapper></Link>
                    <Link to="/categories/item/00501" state={{category: "Etc", subCategory: "안경", categoryNumber: "005", subCategoryNumber: "00501"}}><GridWrapper>안경</GridWrapper></Link>
                    <Link to="/categories/item/00502" state={{category: "Etc", subCategory: "속옷", categoryNumber: "005", subCategoryNumber: "00502"}}><GridWrapper>속옷</GridWrapper></Link>
                    <Link to="/categories/item/00503" state={{category: "Etc", subCategory: "양말", categoryNumber: "005", subCategoryNumber: "00503"}}><GridWrapper>양말</GridWrapper></Link>
                </MenuGrid>
            </SidebarWrapper>
    )
}

export default Sidebar;