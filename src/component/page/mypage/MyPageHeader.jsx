import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.span`
  color: white;
  font-size: 25px;
  font-weight: 500;
`

const Search = styled.input`
  display: table-cell;
  vertical-align: middle;
  padding: 5px;
  margin: 10px;
  width: 200px;
`;

function MyPageHeader(props) {
    return (
        <Wrapper>
            <Logo>WEARWAY</Logo>
            <Search />
        </Wrapper>
    );
}

export default MyPageHeader;