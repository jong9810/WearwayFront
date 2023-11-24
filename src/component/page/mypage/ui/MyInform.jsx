import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const MyInformWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyInformHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
`;

const MyInformBody = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
`;

const MyInformMenu = styled.span`
  font-size: 15px;
  color: white;
  margin-left: 15px;
`;

function MyInform(props) {
    return (
        <>
            <MyInformWrapper>
                <MyInformHeader>
                    <Link to={"/mypage"}><span style={{fontSize: "25px", color: "white"}}>My Page</span></Link>
                    <div>
                        <Link to={"/cart"}><MyInformMenu>장바구니</MyInformMenu></Link>
                        <Link to={"/service"}><MyInformMenu>고객센터</MyInformMenu></Link>
                        <Link to={"/main"}><MyInformMenu>로그아웃</MyInformMenu></Link>
                    </div>
                </MyInformHeader>
                <MyInformBody>
                    <div style={{width: "50%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <div style={{width: "200px", height: "200px", borderRadius: "500px", backgroundColor: "lightgray", marginLeft: "20px", marginRight: "50px"}}><img /></div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <div style={{marginBottom: "10px"}}>
                                <span style={{fontSize: "55px", fontWeight: "900"}}>사용자 닉네임</span>
                                <span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;회원정보변경</span>
                            </div>
                            <div style={{marginBottom: "10px"}}>
                                <span style={{fontSize: "25px", fontWeight: "600"}}>LV.3 멤버</span>
                                <span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;가입일 : 2023.11.21</span>
                            </div>
                            <div>
                                <span style={{color: "lightgray", fontWeight: "600"}}>김*인님 다음 등급인 브론즈까지 62,616점 남았습니다.</span>
                                <span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;등급혜택></span>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "40%", height: "40%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <div>
                            <img />
                            <span style={{fontSize: "15px", fontWeight: "600", marginBottom: "10px"}}>적립금></span><br/>
                            <span style={{fontSize: "35px", fontWeight: "700"}}>3,806</span>
                        </div>
                        <div>
                            <img />
                            <span style={{fontSize: "15px", fontWeight: "600", marginBottom: "10px"}}>포인트></span><br/>
                            <span style={{fontSize: "35px", fontWeight: "700"}}>2,400</span>
                        </div>
                        <div>
                            <img />
                            <span style={{fontSize: "15px", fontWeight: "600", marginBottom: "10px"}}>쿠폰></span><br/>
                            <span style={{fontSize: "35px", fontWeight: "700"}}>131</span>
                        </div>
                        <div>
                            <img />
                            <span style={{fontSize: "15px", fontWeight: "600", marginBottom: "10px"}}>후기작성></span><br/>
                            <span style={{fontSize: "35px", fontWeight: "700"}}>2</span>
                        </div>
                    </div>
                </MyInformBody>
            </MyInformWrapper>
        </>
    );
}

export default MyInform;