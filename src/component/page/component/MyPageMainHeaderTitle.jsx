import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`;

function MyPageMainHeaderTitle(props) {
    return (
        <Wrapper>{props.title}</Wrapper>
    );
}

export default MyPageMainHeaderTitle;