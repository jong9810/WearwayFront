import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PageNum = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #b2b2b2;
  margin-right: 5px;
  margin-left: 5px;
`;

const SelectedPageNum = styled(PageNum)`
  color: black;
`;

function PaginationDiv(props) {
    return (
        <Wrapper>
            <Link to={""}><SelectedPageNum>1</SelectedPageNum></Link>
            <Link to={""}><PageNum>2</PageNum></Link>
        </Wrapper>
    );
}

export default PaginationDiv;