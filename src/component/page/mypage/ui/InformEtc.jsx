import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const InformEtcTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const InformEtcValue = styled.span`
  font-size: 35px;
  font-weight: 700;
`;

function InformEtc(props) {
    return (
        <Link to={props.url}>
            <div style={{color: "white"}}>
                <img src={props.imgUrl} alt={""}/>
                <InformEtcTitle>{props.title}></InformEtcTitle><br/>
                <InformEtcValue>{props.value}</InformEtcValue>
            </div>
        </Link>
    );
}

export default InformEtc;