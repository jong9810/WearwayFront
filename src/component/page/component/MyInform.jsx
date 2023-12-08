import React from "react";
import styled from "styled-components";
import MyInformHeader from "./MyInformHeader";
import MyInformBody from "./MyInformBody";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MyInform(props) {
    return (
        <Wrapper>
            <MyInformHeader />
            <MyInformBody />
        </Wrapper>
    );
}

export default MyInform;