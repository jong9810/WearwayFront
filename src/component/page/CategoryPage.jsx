import React from 'react';
import styled from 'styled-components';
import Sidebar from "../ui/Sidebar";
import {Link, useLocation} from "react-router-dom"

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
`
function CategoryPage(props) {
    const location = useLocation();
    const category = location.state.category;
    const subCategory = location.state.subCategory;
    const categoryNumber = location.state.categoryNumber;
    const subCategoryNumber = location.state.subCategoryNumber;
    console.log(location);
    console.log(subCategory);
    return (
        <CategoryWrapper>
            <Sidebar></Sidebar>
            <RightArea>
                <Division1>
                    <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;<Hover>무신사 스토어</Hover></Link>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                    <Link to={`/categories/item/${categoryNumber}`} state={{category: `${category}`, categoryNumber: `${categoryNumber}`}}><Hover>{category}</Hover></Link>
                    {
                        subCategory === undefined ? null :
                            <>
                                <span>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;</span>
                                <Link to={`/categories/item/${subCategoryNumber}`} state={{subCategory: `${subCategory}`, category: `${category}`, categoryNumber: `${categoryNumber}`, subCategoryNumber: `${subCategoryNumber}`}}><Hover>{subCategory}</Hover></Link>
                            </>
                    }
                </Division1>
                <Division2>
                    &nbsp;{category}
                </Division2>
            </RightArea>
        </CategoryWrapper>
    );
}




export default CategoryPage;