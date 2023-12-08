import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import OrderListItemOne from "./OrderListOne";
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

function OrderListTable(props) {
    return (
        <Wrapper>
            <Table>
                <Thead>
                    <tr>
                        <Th style={{width: "30%"}}>상품정보</Th>
                        <Th style={{width: "15%"}}>주문일자</Th>
                        <Th style={{width: "15%"}}>주문번호</Th>
                        <Th style={{width: "15%"}}>주문금액(수량)</Th>
                        <Th style={{width: "25%"}}>주문 상태</Th>
                    </tr>
                </Thead>
                <tbody>
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"}/>
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성 불가"} />
                    <OrderListItemOne orderStatus={"구매 확정"} reviewStatus={"후기 작성"} />
                </tbody>
            </Table>
            <IfTableEmptyDiv title={"구매하신 내역이"} />
            <PaginationDiv />
        </Wrapper>
    );
}

export default OrderListTable;