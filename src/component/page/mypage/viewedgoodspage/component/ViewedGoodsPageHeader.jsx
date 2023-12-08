import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import MyPageMainHeaderTitle from "../../../component/MyPageMainHeaderTitle";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

function ViewedGoodsPageHeader(props) {
    return (
        <Wrapper>
            <MyPageMainHeaderTitle title={"최근 본 상품"} />
            <hr style={{height: "3px", background: "black", marginBottom: "15px"}} />
        </Wrapper>
    );
}

export default ViewedGoodsPageHeader;