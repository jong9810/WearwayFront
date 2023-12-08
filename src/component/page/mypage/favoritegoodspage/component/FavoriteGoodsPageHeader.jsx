import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import MyPageMainHeaderTitle from "../../../component/MyPageMainHeaderTitle";
import FavoriteGoodsPageMenu from "./FavoriteGoodsPageMenu";

const Wrapper = styled.div`
  
`;

function FavoriteGoodsPageHeader(props) {
    return (
        <Wrapper>
            <MyPageMainHeaderTitle title={"좋아요"} />
            <FavoriteGoodsPageMenu />
            <hr style={{height: "3px", background: "black", marginBottom: "15px"}} />
        </Wrapper>
    );
}

export default FavoriteGoodsPageHeader;