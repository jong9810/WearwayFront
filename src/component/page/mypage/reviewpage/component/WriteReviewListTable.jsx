import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import WriteReviewListOne from "./WriteReviewListOne";
import IfTableEmptyDiv from "../../../component/IfTableEmptyDiv";
import PaginationDiv from "../../../component/PaginationDiv";

const Wrapper = styled.div`
  
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Thead = styled.thead`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Th = styled.th`
  height: 50px;
  font-size: 16px;
  font-weight: bold;
`;

const PageDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PageNum = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #b2b2b2;
  margin-right: 5px;
  margin-left: 5px;
`;

const SelectedPageNum = styled(PageNum)`
  color: black;
`;

function WriteReviewListTable(props) {
    return (
        <Wrapper>
            <Table>
                <Thead>
                    <tr>
                        <Th style={{width: "55%"}}>상품정보</Th>
                        <Th style={{width: "15%"}}>구매 / 구매확정일</Th>
                        <Th style={{width: "15%"}}>사이즈 추천</Th>
                        <Th style={{width: "15%"}}>후기 작성</Th>
                    </tr>
                </Thead>
                <tbody>
                    <WriteReviewListOne />
                    <WriteReviewListOne />
                </tbody>
            </Table>
            <IfTableEmptyDiv title={"후기를 작성할 수 있는 상품이"} />
            <PaginationDiv />
        </Wrapper>
    );
}

export default WriteReviewListTable;