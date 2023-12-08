import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import OrderListItemInfo from "./OrderListItemInfo";
import OrderListStatus from "./OrderListStatus";

const Tr = styled.tr`
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const Td = styled.td`
  height: 130px;
`;

const Td1 = styled(Td)`
  width: 30%;
`;

const Td2 = styled(Td)`
  width: 15%;
`;

const Td3 = styled(Td)`
  width: 15%;
`;

const Td4 = styled(Td)`
  width: 15%;
`;

const Td5 = styled(Td)`
  width: 25%;
`;

function OrderListItemOnd(props) {
    return (
        <Tr>
            <Td1><OrderListItemInfo /></Td1>
            <Td2>{"2023.11.05"}</Td2>
            <Td3>{"202311050904240002"}</Td3>
            <Td4>
                <span>{"23,600"}원</span><br/>
                <span style={{color: "gray"}}>{1}개</span>
            </Td4>
            <Td5><OrderListStatus orderStatus={props.orderStatus} reviewStatus={props.reviewStatus}/></Td5>
        </Tr>
    );
}

export default OrderListItemOnd;