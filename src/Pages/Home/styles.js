import { element } from "prop-types";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.$backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const BannerGradient = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.0802696078431373) 50%,
    #000000 100%
  );

  .selectModelModalContainer {
    height: 100vh;
  }
`;

export const SecundaryBannerContainer = styled.div`
  width: 100%;
  padding-bottom: 0rem;

  background-color: ${(element) => element.$bgColor};

  display: flex;
  align-items: center;
  justify-content: center;


overflow: hidden;
`;

