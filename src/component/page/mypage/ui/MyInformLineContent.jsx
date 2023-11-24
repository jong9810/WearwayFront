import React from 'react';
import {Link} from "react-router-dom";

function MyInformContent(props) {
    return (
        <>
            <div style={{marginBottom: "10px"}}>
                <span style={{fontSize: "55px", fontWeight: "900"}}>{props.nickname}</span>
                <Link to={""}><span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;회원정보변경</span></Link>
            </div>
            <div style={{marginBottom: "10px"}}>
                <span style={{fontSize: "25px", fontWeight: "600"}}>LV.{props.level} {props.grade}</span>
                <span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;가입일 : {props.createdDate}</span>
            </div>
            <div>
                <span style={{ color: "lightgray", fontWeight: "600"}}>{props.memberName}님 다음 등급인 {props.nextGrade}까지 {props.remainPoint}점 남았습니다.</span>
                <Link to={""}><span style={{color: "gray", fontSize: "13px"}}>&nbsp;&nbsp;등급혜택></span></Link>
            </div>
        </>
    );
}

export default MyInformContent;