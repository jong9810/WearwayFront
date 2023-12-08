import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import ReviewListTable from "./component/ReviewListTable";

const Body = styled.div`
  
`;

const MenuWrap = styled.div`
  margin-bottom: 15px;
`;

const Menu = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 15px;
  color: #aaaaaa;
`;

const SelectedMenu = styled(Menu)`
  color: black;
`;

function ReviewHistoryPage(props) {
    return (
        <Body>
            <MenuWrap>
                <Link to={""}><SelectedMenu>전체</SelectedMenu></Link>
                <Link to={""}><Menu>승인</Menu></Link>
                <Link to={""}><Menu>승인 대기중</Menu></Link>
                <Link to={""}><Menu>조건 미충족</Menu></Link>
            </MenuWrap>
            <ReviewListTable />
        </Body>
    );
}

export default ReviewHistoryPage;