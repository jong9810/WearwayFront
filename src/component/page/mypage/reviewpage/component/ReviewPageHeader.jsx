import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import ReviewNoticeExplanation from "./ReviewNoticeExplanation";
import MyPageMainHeaderTitle from "../../../component/MyPageMainHeaderTitle";
import ReviewPageMenu from "./ReveiwPageMenu";

const Header = styled.div`
  margin-bottom: 30px;
`;

function ReviewPageHeader(props) {
    return (
        <Header>
            <MyPageMainHeaderTitle title={"구매후기"} />
            <ReviewPageMenu />
            <hr style={{height: "3px", background: "black", marginBottom: "15px"}} />
            <ReviewNoticeExplanation />
        </Header>
    );
}

export default ReviewPageHeader;