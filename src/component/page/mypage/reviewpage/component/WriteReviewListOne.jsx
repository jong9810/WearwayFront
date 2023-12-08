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
  width: 55%;
`;

const Td2 = styled(Td)`
  width: 15%;
`;

const Td3 = styled(Td)`
  width: 15%;
  font-weight: bold;
  color: #919191;
`;

const Td4 = styled(Td)`
  width: 15%;
`;

const WriteReviewBtnWrap = styled.div`
  padding: 15px;
`;

const UnableReviewBtn = styled.button`
  color: #b3b3b3;
  width: 180px;
  height: 35px;
  background: #f3f3f3;
  font-weight: bold;
  font-size: 14px;
  border: none;
  margin-bottom: 3px;
`;

const WriteReviewBtn = styled(UnableReviewBtn)`
  color: #777777;
  &:hover {
    cursor: pointer;
  }
`;

function WriteReviewListOne(props) {
    return (
        <Tr>
            <Td1><OrderListItemInfo /></Td1>
            <Td2>
                <span>{"2023.11.05"}</span><br />
                <span style={{fontWeight: "bold"}}>{"구매확정"}</span>
            </Td2>
            <Td3>
                <span>{"작성불가"}</span><br />
                <span>{"(90일 경과)"}</span>
            </Td3>
            <Td4>
                <WriteReviewBtnWrap>
                    <WriteReviewBtn>스타일 후기 작성하기</WriteReviewBtn><br />
                    <WriteReviewBtn>상품 사진 후기 작성하기</WriteReviewBtn><br />
                    <UnableReviewBtn>일반 후기 기간만료</UnableReviewBtn>
                </WriteReviewBtnWrap>
            </Td4>
        </Tr>
    );
}

export default WriteReviewListOne;