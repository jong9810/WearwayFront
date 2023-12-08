import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OrderStatusUl = styled.ul`
  width: 50%;
  margin-left: 50px;
  list-style: none;
`;

const OrderStatusLi = styled.li`
  margin-bottom: 5px;
`;

const OrderStatusSpan = styled.span`
  font-weight: bold;
  color: #0078ff;
  text-decoration: underline;
`;

const Button = styled.button`
  font-weight: bold;
  background: transparent;
  border: 1px solid lightgray;
  width: 70px;
  height: 32px;
  &:hover {
    border-color: black;
  }
`;

const ReviewStatusDiv = styled.div`
  width: 50%;
  margin-right: 50px;
`;

const ReviewStatusSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #aaaaaa;
`;

function OrderListStatus(props) {
    return (
        <Wrapper>
            <OrderStatusUl>
                <OrderStatusLi>
                    <Link to={""}><OrderStatusSpan>{props.orderStatus}</OrderStatusSpan></Link>
                </OrderStatusLi>
                <OrderStatusLi>
                    <Button>배송조회</Button>
                </OrderStatusLi>
            </OrderStatusUl>
            <ReviewStatusDiv>
                <ReviewStatusSpan>{props.reviewStatus}</ReviewStatusSpan>
            </ReviewStatusDiv>
        </Wrapper>
    );
}

export default OrderListStatus;