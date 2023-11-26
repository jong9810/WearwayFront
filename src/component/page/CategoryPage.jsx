import React from 'react';
import styled from 'styled-components';
import Sidebar from "../ui/Sidebar";
import {Link, useLocation} from "react-router-dom"
import HoverUnderline from "../styles/HoverUnderline"
import Item from "../ui/Item";
import WhiteHeader from "../ui/WhiteHeader";

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
  white-space: nowrap;
`

const CategoryWrapper2 = styled.div`
  background-color: white;
  height: 100%;
  display: block;
  padding: 20px;
  
    &:hover{background-color: rgb(228, 228, 228)}
`
const CategoryWrapper3 = styled.div`
  background-color: white;
  border: 1px solid rgb(208, 208, 208);
  display: block;
  align-items: center;
  margin: 5px;
  height: 100%;
  position: relative;
  color: black;
`

const RightArea = styled.div`
  width: calc(100% - 270px);
  position: absolute;
  display: block;
  left: 269px;
  top: 0px;
  right: 0px;
  height: 2000px;
  border-left: 1px solid rgb(208, 208, 208);
  box-sizing: border-box;
`

const Division1 = styled.div`
  display:block;
  height: 25px;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  border-bottom: 1px solid rgb(208, 208, 208);
  align-items: center;
  line-height: 25px;
  margin: 0;
  padding: 0;
`
const Division2 = styled.div`
  display: block;
  height: 40px;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  border-bottom: 1px solid rgb(208, 208, 208);
  align-items: center;
  line-height: 40px;
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: 700;
`
const Menu = styled.span`
  color: black;
  padding: 10px;
  font-size: 12px;
  font-weight: normal;
  &:hover{
    text-decoration: underline;
    font-weight: bold;
  }
`

const Listbox = styled.div`
  height: auto;
  line-height: 14px;
  width: 100%;
  vertical-align: top;
  display: block;
  font-size: 12px;
`
const Searchlist = styled.ul`
  margin-inline-end: -1px;
  padding-right: -1px;
  line-height: 14px;
  display: table;
  list-style: none;
`

const Content1 = styled.div`
  color: grey;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(208, 208, 208);
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
        <div>
            <WhiteHeader></WhiteHeader>
            <CategoryWrapper>
                <Sidebar></Sidebar>
                <RightArea>
                    <Division1>
                        <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;<HoverUnderline>Wearway</HoverUnderline></Link>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                        <Link to={`/categories/item/${categoryNumber}`} state={{category: `${category}`, categoryNumber: `${categoryNumber}`}}><HoverUnderline>{category}</HoverUnderline></Link>
                        {
                            subCategory === undefined ? null :
                                <>
                                    <span>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;</span>
                                    <Link to={`/categories/item/${subCategoryNumber}`} state={{subCategory: `${subCategory}`, category: `${category}`, categoryNumber: `${categoryNumber}`, subCategoryNumber: `${subCategoryNumber}`}}><HoverUnderline>{subCategory}</HoverUnderline></Link>
                                </>
                        }
                    </Division1>
                    <Division2>
                        &nbsp;{category}
                    </Division2>
                    <CategoryWrapper2>
                        <CategoryWrapper3>
                            <Content1>
                                <Link to="/"><Menu>추천순</Menu></Link>|
                                <Link to="/"><Menu>신상품순</Menu></Link>|
                                <Link to="/"><Menu>낮은 가격순</Menu></Link>|
                                <Link to="/"><Menu>높은 가격순</Menu></Link>
                            </Content1>
                            <Listbox>
                                <Searchlist>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                    <Item></Item>
                                </Searchlist>
                            </Listbox>
                        </CategoryWrapper3>
                    </CategoryWrapper2>
                </RightArea>
            </CategoryWrapper>
        </div>
    );
}




export default CategoryPage;