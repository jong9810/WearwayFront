import React from 'react';
import styled from 'styled-components';
import Sidebar from "../ui/Sidebar";
import {Link} from "react-router-dom";

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
  border-left: 1px solid rgb(208, 208, 208);
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

const Division3 = styled.div`
  margin: 0;
  padding: 10px 10px 10px 20px;
  clear: both;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
  display: block;
  white-space: pre-wrap;
  color: black;
`

const CSCenter = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  font-size: 18px;
  font-weight: bold;
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

const Span2 = styled.span`
  font-size:30px;
`
function ServicePage(props) {
    return (
        <CategoryWrapper>
            <Sidebar></Sidebar>
            <RightArea>
                <Division1>
                    <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;<Hover>무신사 스토어</Hover></Link>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                    <Link to="/service"><Hover>고객센터</Hover></Link>
                </Division1>
                <Division2>
                    &nbsp;CS Center
                </Division2>
                <Division3>
                    <CSCenter>
                        <span>TEL.</span><Span2>9999-9999</Span2>
                    </CSCenter>
                    <div>
                        - 평일 9:00 ~ 18:00

                    </div>
                    <div>
                            - 토, 일, 공휴일 휴무
                    </div>
                </Division3>
            </RightArea>
        </CategoryWrapper>
    );
}




export default ServicePage;