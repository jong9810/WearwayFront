import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 200px;
  color: #777777;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
`;

function IfTableEmptyDiv(props) {
    return (
        <Wrapper>
            <span>{props.title} 없습니다.</span>
        </Wrapper>
    );
}

export default IfTableEmptyDiv;