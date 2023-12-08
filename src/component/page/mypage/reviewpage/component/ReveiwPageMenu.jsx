import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const Menu = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #c8c8c8;
`;

const SelectedMenu = styled(Menu)`
  color: black;
`;

const MenuSplit = styled(Menu)`
  margin-left: 10px;
  margin-right: 10px;
`;

function ReviewPageMenu(props) {
    return (
        <Wrapper>
            <Link to={"/mypage/review/write_review"}><SelectedMenu>후기 작성</SelectedMenu></Link>
            <MenuSplit>/</MenuSplit>
            <Link to={"/mypage/review/review_history"}><Menu>후기 내역</Menu></Link>
        </Wrapper>
    );
}

export default ReviewPageMenu;