import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import ReviewListOne from "./ReviewListOne";
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
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;

const Th = styled.th`
  height: 50px;
  font-size: 16px;
  font-weight: bold;
`;

function ReviewListTable(props) {
    return (
        <Wrapper>
            <Table>
                <Thead>
                    <tr>
                        <Th style={{width: "35%"}}>상품정보</Th>
                        <Th style={{width: "55%"}}>내용</Th>
                        <Th style={{width: "10%"}}>후기 종류</Th>
                    </tr>
                </Thead>
                <tbody>
                    <ReviewListOne />
                </tbody>
            </Table>
            <IfTableEmptyDiv title={"등록된 후기내역이"} />
            <PaginationDiv />
        </Wrapper>
    );
}

export default ReviewListTable;