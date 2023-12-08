import React from 'react';
import styled from 'styled-components';

const BodyContent = styled.div`
  margin-top: 100px;
`;

const BodyContentTitleDiv = styled.div`
  margin-bottom: 12px;
`;

const BodyContentTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const BodyContentMain = styled.div`
  background: #f7f7f7;
  padding-left: 50px;
  padding-bottom: 20px;
  margin-top: 70px;
  margin-bottom: 200px;
`;

const Dl = styled.dl`
  padding-top: 30px;
`;

const Dt = styled.dt`
  font-weight: bold;
`;

const Dd = styled.dd`
  position: relative;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #777777;
  padding-left: 120px;
`;

const Em = styled.em`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
  font-style: normal;
`;

function OrderStatusExplanation(props) {
    return (
        <BodyContent>
            <BodyContentTitleDiv>
                <BodyContentTitle>택배배송</BodyContentTitle>
            </BodyContentTitleDiv>
            <hr />
            <BodyContentMain>
                <Dl>
                    <Dt>주문</Dt>
                    <Dd>
                        <Em>주문 접수</Em>
                        가상 계좌 주문이 완료되었습니다. 안내된 가상 계좌 번호로 입금이 가능합니다.
                    </Dd>
                    <Dd>
                        <Em>입금 확인</Em>
                        주문하신 상품의 결제가 완료되었습니다. 판매자가 주문을 확인하기 전 상태로, 옵션 교환 또는 주문 취소가 가능합니다.
                    </Dd>
                    <Dd>
                        <Em>출고 처리 중</Em>
                        주문하신 상품을 택배 업체로 전달할 수 있게 준비(포장) 중입니다. 옵션 변경 또는 주문 취소가 불가능합니다.
                    </Dd>
                    <Dd>
                        <Em>출고 완료</Em>
                        상품을 배송하기 위한 준비(포장)가 완료되어 출고지에서 택배 업체로 전달되었습니다.
                    </Dd>
                    <Dd>
                        <Em>배송 시작</Em>
                        택배 업체가 출고지로부터 전달받은 상품을 고객님의 배송지 주소로 안전하게 배송 중입니다.
                    </Dd>
                    <Dd>
                        <Em>배송 완료</Em>
                        주문하신 상품이 배송지 주소에 잘 도착했습니다.
                    </Dd>
                    <Dd>
                        <Em>구매 확정</Em>
                        상품을 정상적으로 수령하여 구매를 확정했습니다. 구매 확정을 하지 않으시더라도 배송 완료 후 7일이 지나면 자동으로 확정됩니다. 구매 확정 시 교환 또는 환불 요청이 불가능합니다.
                    </Dd>
                    <Dd>
                        <Em>주문 취소</Em>
                        가상 계좌 주문이 입금 전 취소되었습니다. 주문 접수 후 2일 내에 입금하지 않으시면 자동으로 취소됩니다.
                    </Dd>
                    <Dd>
                        <Em>결제 오류</Em>
                        카드 한도 초과, 할부 개월 수 오류 등으로 결제되지 않은 상태입니다.
                    </Dd>
                </Dl>
                <Dl>
                    <Dt>교환</Dt>
                    <Dd>
                        <Em>교환 입금 대기</Em>
                        교환 요청 시 교환 배송비 결제를 가상계좌로 선택한 후 배송비를 입금하기 전 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>교환 회수 요청</Em>
                        교환 접수 후 회수 요청 택배사에 교환 상품 반품 수거를 요청한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>교환 회수 완료</Em>
                        택배사에서 교환 상품을 회수 완료한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>교환 전달 완료</Em>
                        택배사에서 교환 상품을 판매자에게 전달 완료한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>교환 처리 중</Em>
                        교환 신청한 상품이 판매자에게 도착하고 검수 후 교환 처리가 진행되는 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>교환 완료</Em>
                        보내주신 교환 요청 상품의 검수가 정상적으로 완료되었습니다. 교환 상품의 주문 상태가 출고 처리 중으로 변경될 수 있습니다.
                    </Dd>
                    <Dd>
                        <Em>교환 주문 접수</Em>
                        상품 교환 신청 접수가 완료되었습니다. 교환 재고는 확정된 것이 아니기에 수시로 변동되는 재고로 인한 품절 등의 사유로 발송이 어려울 수 있습니다.
                    </Dd>
                    <Dd>
                        <Em>교환 취소</Em>
                        상품 교환 신청이 취소된 상태입니다.
                    </Dd>
                </Dl>
                <Dl>
                    <Dt>환불</Dt>
                    <Dd>
                        <Em>환불 입금 대기</Em>
                        환불 요청 시 반품 배송비 결제를 가상계좌로 선택한 후 배송비를 입금하기 전 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>환불 회수 요청</Em>
                        환불 접수 후 회수 요청 택배사에 환불 상품 반품 수거를 요청한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>환불 회수 완료</Em>
                        택배사에서 환불 상품을 회수 완료한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>환불 전달 완료</Em>
                        택배사에서 환불 상품을 판매자에게 전달 완료한 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>환불 처리 중</Em>
                        환불 신청한 상품이 판매자에게 도착하고 검수 후 환불 처리가 진행되는 상태입니다.
                    </Dd>
                    <Dd>
                        <Em>환불 완료</Em>
                        환불 요청이 승인되었습니다. 결제 방법에 따라 영업일 기준 1~3일 이내 결제 취소 또는 계좌로 입금됩니다.
                    </Dd>
                </Dl>
            </BodyContentMain>
        </BodyContent>
    );
}

export default OrderStatusExplanation;