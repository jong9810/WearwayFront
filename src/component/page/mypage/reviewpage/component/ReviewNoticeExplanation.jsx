import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeaderContentUl = styled.ul`
  padding-left: 20px;
`;

const HeaderContentLi = styled.li`
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  margin-bottom: 10px;
`;

function ReviewNoticeExplanation(props) {
    return (
        <HeaderContentUl>
            <HeaderContentLi>무신사의 후기는 일반 후기, 상품 사진 후기, 뷰티후기, 스타일 후기로 구성되어 있으며, 각각의 후기 작성 시 기준에 맞는 적립금이 지급됩니다.</HeaderContentLi>
            <HeaderContentLi>작성 시 관리자 확인 후 적립금이 지급되며 상품 상세페이지에서 확인하실 수 있습니다.</HeaderContentLi>
            <HeaderContentLi>후기 작성 및 재등록은 구매확정일로부터 90일까지 가능합니다.</HeaderContentLi>
            <HeaderContentLi>적립금 지급이 완료된 이후 후기 삭제를 원하실 경우 지급된 적립금 회수 후 처리가 가능합니다.</HeaderContentLi>
            <HeaderContentLi>현재 보유 적립금 보다 회수될 적립금이 많은 경우, 보유 적립금이 마이너스 처리됩니다.</HeaderContentLi>
            <HeaderContentLi>적립금이 지급된 후기는 수정이 불가능합니다.</HeaderContentLi>
        </HeaderContentUl>
    );
}

export default ReviewNoticeExplanation;