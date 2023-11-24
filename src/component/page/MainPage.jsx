import React from 'react';
import styled from 'styled-components';
import Sidebar from "../ui/Sidebar";
import WhiteHeader from "../ui/WhiteHeader";

const Wrapper = styled.div`
  clear: both;
  position: relative;
  display: block;
  font-size: 12px;
  vertical-align: top;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: none;
  height: 100%;
`

function MainPage(props) {
    return (
        <div>
            <WhiteHeader></WhiteHeader>
            <Wrapper>
                <Sidebar></Sidebar>
            </Wrapper>
        </div>
    )
}

export default MainPage;