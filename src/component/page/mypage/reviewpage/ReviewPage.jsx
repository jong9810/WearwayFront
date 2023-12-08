import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ReviewPageHeader from "./component/ReviewPageHeader";
import WriteReviewPage from "./WriteReviewPage";
import ReviewHistoryPage from "./ReviewHistoryPage";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1560px;
  display: flex;
  flex-direction: column;
`;

function ReviewPage(props) {
    let reviewPage = null;
    if (props.menu === "write_review") {
        reviewPage = <WriteReviewPage />;
    } else if (props.menu === "review_history") {
        reviewPage = <ReviewHistoryPage />;
    }

    return (
        <Wrapper>
            <ReviewPageHeader />
            {reviewPage}
        </Wrapper>
    );
}

export default ReviewPage;