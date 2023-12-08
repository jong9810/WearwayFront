import React from 'react';
import styled from "styled-components";
import FavoriteGoodsPageHeader from "./component/FavoriteGoodsPageHeader";
import FavoriteGoodsPageBody from "./component/FavoriteGoodsPageBody";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1560px;
  display: flex;
  flex-direction: column;
`;

function FavoriteGoodsPage(props) {
    return (
        <Wrapper>
            <FavoriteGoodsPageHeader />
            <FavoriteGoodsPageBody />
        </Wrapper>
    );
}

export default FavoriteGoodsPage;