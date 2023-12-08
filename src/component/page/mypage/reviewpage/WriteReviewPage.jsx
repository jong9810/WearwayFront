import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import WriteReviewListTable from "./component/WriteReviewListTable";

const Body = styled.div`

`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e5e5e5;
  margin-bottom: 30px;
`;

const ButtonWrap = styled.div`
  border: 1px solid #f1f1f1;
  border-right: none;
`;

const Button = styled.button`
  color: #777777;
  font-size: 13px;
  font-weight: bold;
  background-color: transparent;
  width: 78px;
  height: 30px;
  border: none;
  border-right: 1px solid #f1f1f1;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedButton = styled(Button)`
  color: black;
  border: 1px solid black;
`;

const SearchBtn = styled(Button)`
  background: black;
  color: white;
  width: 105px;
  height: 30px;
  font-weight: 900;
  &:hover {
    background: #0078ff;
  }
`;

const PeriodWrap = styled.div`
  margin-left: 15px;
  margin-right: 30px;
`;

const CalendarWrap = styled.div`
  display: inline-block;
  text-align: center;
  width: 130px;
  height: 30px;
  border: 1px solid #e5e5e5;
`;

const Calendar = styled.input`
  color: #6e6e6e;
  font-size: 13px;
  font-weight: bold;
  line-height: 28px;
  border: none;
`;

function WriteReviewPage(props) {
    return (
        <Body>
            <SearchDiv>
                <ButtonWrap>
                    <Button>1주일</Button>
                    <Button>1개월</Button>
                    <Button>3개월</Button>
                    <SelectedButton>전체 시기</SelectedButton>
                </ButtonWrap>
                <PeriodWrap>
                    <CalendarWrap><Calendar type={"date"} /></CalendarWrap>
                    <span>-</span>
                    <CalendarWrap><Calendar type={"date"} /></CalendarWrap>
                </PeriodWrap>
                <SearchBtn>조회하기</SearchBtn>
            </SearchDiv>
            <WriteReviewListTable />
        </Body>
    );
}

export default WriteReviewPage;