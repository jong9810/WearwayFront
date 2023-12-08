import React from 'react';
import styled from 'styled-components';
import InformEtc from "./InformEtc";
import Profile from "./Profile";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function MyInformBody(props) {
    return (
        <Wrapper>
            <Profile />
            <InformEtc />
        </Wrapper>
    );
}

export default MyInformBody;