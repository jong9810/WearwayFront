import React from 'react';
import styled from 'styled-components';
import Sidebar from "../ui/Sidebar";

const CategoryWrapper = styled.div`
  clear: both;
  position: relative;
  display: block;
  font-size: 12px;
  vertical-align: top;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: none;
  height: 100%;
`

const RightArea = styled.div`
  width: calc(100% - 261px);
  position: absolute;
  left: 269px;
  top: 0px;
  right: 0px;
  min-width: 1291px;
  height: 2000px;
  border-left: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
`

const Division1 = styled.div`
  height: 25px;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  border-bottom: 1px solid #ddd;
  align-items: center;
  line-height: 25px;
  margin: 0;
  padding: 0;
`
const Division2 = styled.div`
  height: 40px;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  border-bottom: 1px solid #ddd;
  align-items: center;
  line-height: 40px;
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: 700;
`

const Hover = styled.span`
  &:hover{
    text-decoration-line: underline;
    text-decoration-color: black;
    text-decoration-style: solid;
  }
  &:visited{
    text-decoration-color: none;
  }
`
function CategoryPage(props) {
    return (
        <CategoryWrapper>
            <Sidebar></Sidebar>
            <RightArea>
                <Division1>
                    <a href="/">&nbsp;&nbsp;&nbsp;&nbsp;<Hover>무신사 스토어</Hover></a>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                    <a href="/category"><Hover>카테고리</Hover></a>
                </Division1>
                <Division2>
                    &nbsp;Category
                </Division2>
            </RightArea>
        </CategoryWrapper>
    );
}




export default CategoryPage;