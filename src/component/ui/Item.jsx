import React from 'react';
import styled from 'styled-components';
import itemImg from '../../component/img/ItemImg.png'

const Libox = styled.li`
  line-height: 14px;
  float: left;
  font-family: "Apple SD Gothic Neo","Noto Sans KR",sans-serif;
  width: 20% !important;
  position: relative;
  min-width: 154px;
  color: #b2b2b2;
  background: #fff;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  vertical-align: top;
  display: list-item;
  text-align: -webkit-match-parent;
  &:hover{
    background-color: rgb(228, 228, 228);
  }
`

const Iconleft = styled.div`
  position: absolute;
  left: -1px;
  top: -1px;
  text-align: center;
  padding: 3px 4px 1px 4px;
  line-height: 18px;
  background: #fff;
  color: #f60;
  z-index: 999;
  font-weight: bold;
  border: 1px solid #ddd;
`

const Liinner = styled.div`
  height: 335px;
  margin: 15px auto 20px;
  vertical-align: top;
  display: block;
  color: #b2b2b2;
  text-align: -webkit-match-parent;
  line-height: 14px;
  font-size: 12px;
  outline: #b2b2b2;
`

const Listimg = styled.div`
  position: relative;
  width: 125px;
  margin: 0 auto 10px;
  text-align: center;
  height: 150px;
  overflow: hidden;
`

const Imgblock = styled.a`
  display: block;
  padding-top: 120%;
  position: relative;
  overflow: hidden;
  width: 125px;
  height: 0;
`

const Itemimg = styled.img`
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 125px;
  height: 150px;
  object-fit: cover;
`

const Articleinfo = styled.div`
  margin: 0 auto;
  position: relative;
  width: 125px;
  text-align: left;
  color: black;
  font-size: 12px;  
  white-space: normal;
`

function Item(props) {
    return (
        <Libox>
            <Iconleft>SALE 37%</Iconleft>
            <Liinner>
                <Listimg><Imgblock href=""><Itemimg src={itemImg} alt ="[애프터 프레이 에디션] 2포켓 나일론 카고 럭색 (블랙/니켈)" ></Itemimg></Imgblock></Listimg>
                <Articleinfo>
                    <p style={{fontWeight: "bold" ,textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "90%", marginBottom: "5px", cursor: "pointer"}}><a href="">하 아카이브</a></p>
                    <p style={{marginBottom: "3px", cursor: "pointer"}}><a href="">[애프터 프레이 에디션] 2포켓 나일론 카고 럭색 (블랙/니켈)</a></p>
                    <p style={{marginBottom: "3px", fontWeight: "bold"}}><del style={{color: "#999"}}>159,000원</del> 139,000원 </p>
                    <p style={{marginBottom: "3px", paddingTop: "3px", cursor: "pointer", borderTop: "1px solid #ddd", color: "#999", fontWeight: "bold"}}>membership price<span>▼</span></p>
                </Articleinfo>
            </Liinner>
        </Libox>
    );
}

export default Item;