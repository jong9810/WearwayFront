import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import OrderListItemInfo from "../../orderlistoptpage/component/OrderListItemInfo";

const Tr = styled.tr`
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const Td = styled.td`
  height: 130px;
`;

const Td1 = styled(Td)`
  width: 35%;
`;

const Td2 = styled(Td)`
  width: 55%;
`;

const Td3 = styled(Td)`
  width: 10%;
  font-weight: bold;
  color: #919191;
`;

const WriteReviewBtnWrap = styled.div`
  padding: 15px;
`;

function ReviewListOne(props) {
    return (
        <Tr>
            <Td1><OrderListItemInfo /></Td1>
            <Td2>
                <span>{"리뷰 내용 어쩌구 저쩌구..."}</span>
            </Td2>
            <Td3>
                <span>{"스타일 후기"}</span><br />
            </Td3>
        </Tr>
    );
}

export default ReviewListOne;