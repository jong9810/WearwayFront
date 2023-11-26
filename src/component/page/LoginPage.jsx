import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  display: block;
`
const LoginHeader = styled.div`
  max-width: 375px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 510;
`

const HeaderLayout1 = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-basis: 40px;
  flex-shrink: 0;
`

const HeaderButton = styled.button`
  display: inline-flex;
  width: 30px;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 4px;
  background-color: blue; 
`

function LoginPage(props) {
    return (
        <Wrapper>
            <div style={{height: "50px"}}>
                <HeaderLayout1><HeaderButton></HeaderButton></HeaderLayout1>
            </div>
        </Wrapper>
    )
}

export default LoginPage;