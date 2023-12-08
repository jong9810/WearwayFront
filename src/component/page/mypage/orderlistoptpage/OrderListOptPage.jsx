import React from 'react';
import styled from "styled-components";
import OrderListTable from "./component/OrderListTable";
import OrderStatusExplanation from "./component/OrderStatusExplanation";
import OrderNoticeExplanation from "./component/OrderNoticeExplanation";
import OrderListOptPageHeaderMenu from "./component/OrderListOptPageHeaderMenu";
import OrderListOptPageSearchDiv from "./component/OrderListOptPageSearchDiv";
import MyPageMainHeaderTitle from "../../component/MyPageMainHeaderTitle";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1560px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Body = styled.div`
  
`;

function OrderListOptPage(props) {
    return (
        <Wrapper>
            <Header>
                <MyPageMainHeaderTitle title={"주문내역 조회"} />
                <OrderListOptPageHeaderMenu />
                <hr style={{height: "3px", background: "black", marginBottom: "15px"}} />
                <OrderNoticeExplanation />
            </Header>
            <Body>
                <OrderListOptPageSearchDiv />
                <OrderListTable />
                <OrderStatusExplanation />
            </Body>
        </Wrapper>
    );
}

export default OrderListOptPage;