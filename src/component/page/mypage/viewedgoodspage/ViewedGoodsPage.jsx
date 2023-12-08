import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ViewedGoodsPageBody from "./component/ViewedGoodsPageBody";
import ViewedGoodsPageHeader from "./component/ViewedGoodsPageHeader";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1560px;
  display: flex;
  flex-direction: column;
`;

function ViewedGoodsPage(props) {
    return (
        <Wrapper>
            <ViewedGoodsPageHeader />
            <ViewedGoodsPageBody />
        </Wrapper>
    );
}

export default ViewedGoodsPage;