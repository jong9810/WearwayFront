import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import InformEtcOne from "./InformEtcOne";

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function InformEtc(props) {
    return (
        <Wrapper>
            <InformEtcOne imgUrl={""} title={"적립금"} value={"3,806"} />
            <InformEtcOne imgUrl={""} title={"포인트"} value={"2400"} />
            <InformEtcOne imgUrl={""} title={"쿠폰"} value={"131"} />
            <InformEtcOne imgUrl={""} title={"후기작성"} value={"2"} />
        </Wrapper>
    );
}

export default InformEtc;