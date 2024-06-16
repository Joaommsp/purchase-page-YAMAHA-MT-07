import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${(props) => props.$backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerGradient = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.0802696078431373) 0%,
    rgba(18, 18, 18, 1) 100%
  );
`;


export const ClosePopUp = styled.button`
  border: 0;
  position: absolute;
  top: 5rem;
  right: 5rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  .closePopUpIcon {
    width: 25px;
  }
`;
