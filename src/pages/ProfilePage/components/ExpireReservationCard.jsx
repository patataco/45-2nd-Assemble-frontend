import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExpireReservationCard = () => {
  const navigate = useNavigate();
  const goToCourt = () => {
    navigate("/main");
  };
  return (
    <Container onClick={goToCourt}>
      <CardImgWrapper>
        <CardImg src="/images/tennis.png" alt="테니스장사진" />
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>그리너리</CardTitle>
        <CardLocation>
          서울시 강남구 테헤란로 427 위워크 선릉 2호점 10층
        </CardLocation>
        <CardDate>2023년 5월 22일 월요일</CardDate>
      </CardInfo>
      <CardDescription>
        <CardTimeInfo>
          <CardTime>17:00 ~ 19:00</CardTime>
          <CardPrice>20,000 원/시간</CardPrice>
        </CardTimeInfo>
      </CardDescription>
    </Container>
  );
};

export default ExpireReservationCard;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  filter: brightness(0.8);
  border-radius: 30px;
  background-color: ${props => props.theme.lightGray};

  &:hover {
    cursor: pointer;
    ${CardImg} {
      filter: brightness(150%);
    }
  }
`;

const CardImgWrapper = styled.div`
  width: 100%;
  flex: 1.2;
  padding-bottom: 16px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;
const CardDescription = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;
const CardLocation = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
`;

const CardTitle = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
`;

const CardTimeInfo = styled.div`
  flex: 1;
`;
const CardDate = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  color: ${props => props.theme.grey};
`;
const CardTime = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  color: ${props => props.theme.grey};
`;
const CardPrice = styled.p`
  font-size: ${props => props.theme.base.fontSize};
  line-height: ${props => props.theme.base.lineHeight};
  font-weight: 700;
`;