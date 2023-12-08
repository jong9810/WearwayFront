import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e5e5e5;
  margin-bottom: 30px;
`;

const Button = styled.button`
  color: #6e6e6e;
  font-size: 13px;
  font-weight: bold;
  background-color: #f3f3f3;
  width: 61px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-right: 8px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBtn = styled(Button)`
  background: #0078ff;
  color: white;
  width: 105px;
  height: 30px;
  font-weight: 900;
`;

const CalendarWrap = styled.div`
  display: inline-block;
  text-align: center;
  width: 130px;
  height: 30px;
  margin-right: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const Calendar = styled.input`
  color: #6e6e6e;
  font-size: 13px;
  font-weight: bold;
  line-height: 28px;
  border: none;
`;

const SearchInputWrap = styled.div`
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 30px;
  margin-right: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  color: #6e6e6e;
  font-weight: bold;
  margin-right: 8px;
  border: none;
  line-height: 28px;
  padding-top: 2px;
  padding-left: 5px;
`;

function OrderListOptPageSearchDiv(props) {
    return (
        <SearchDiv>
            <Button>최근 1년</Button>
            <Button>1주일</Button>
            <Button>1개월</Button>
            <Button>3개월</Button>
            <CalendarWrap><Calendar type={"date"} /></CalendarWrap>-&nbsp;&nbsp;
            <CalendarWrap><Calendar type={"date"} /></CalendarWrap>
            <SearchInputWrap><SearchInput placeholder={"상품명/브랜드명으로 검색"}/></SearchInputWrap>
            <SearchBtn>조회하기</SearchBtn>
        </SearchDiv>
    );
}

export default OrderListOptPageSearchDiv;