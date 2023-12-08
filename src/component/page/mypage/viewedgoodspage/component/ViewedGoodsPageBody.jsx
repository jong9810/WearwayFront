import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import IfTableEmptyDiv from "../../../component/IfTableEmptyDiv";
import PaginationDiv from "../../../component/PaginationDiv";

const Wrapper = styled.div`
  
`;

const BtnDiv = styled.div`
  margin-top: 20px;
`;

const EditBtn = styled.button`
  width: 70px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  border: 1px solid #e5e5e5;
  &:hover {
    border-color: black;
    cursor: pointer;
  }
`;

function ViewedGoodsPageBody(props) {
    return (
        <Wrapper>
            <IfTableEmptyDiv title={"최근 본 상품이"} />
            <BtnDiv>
                <EditBtn>편집</EditBtn>
            </BtnDiv>
            <PaginationDiv />
        </Wrapper>
    );
}

export default ViewedGoodsPageBody;