import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const Menu = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #c8c8c8;
`;

const SelectedMenu = styled(Menu)`
  color: black;
`;

const MenuSplit = styled(Menu)`
  margin-left: 10px;
  margin-right: 10px;
`;

function FavoriteGoodsPageMenu(props) {
    return (
        <Wrapper>
            <Link to={""}><SelectedMenu>상품</SelectedMenu></Link>
            <MenuSplit>/</MenuSplit>
            <Link to={""}><Menu>브랜드</Menu></Link>
        </Wrapper>
    );
}

export default FavoriteGoodsPageMenu;