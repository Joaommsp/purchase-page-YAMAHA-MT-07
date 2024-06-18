import styled from "styled-components";

export const SpecificationElement = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;

  padding: 1rem 8rem;
`;

export const SpecificationTextContent = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  width: 50%;
  font-size: 5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.71);
  line-height: 1.2;
`;

export const BikeName = styled.span`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.71);
  margin-left: 0.5rem;
`;

export const VersionSellectButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: 0.5rem;
  margin-bottom: 2rem;

  .versionBtn {
    padding: 0.5rem 1.5rem;
    border: 2px solid #ffffff;
    border-radius: 100px;
    background-color: transparent;
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: #ffffff;

    transition: 0.3s ease-in-out;
  }

  .versionBtn:hover {
    cursor: pointer;
    color: #181818;
    background-color: #ffffff;
  }
`;

export const SpecificationsBtn = styled.button`
  padding: 0.8rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 2px solid #ffffff;
  border-radius: 100px;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;

  transition: 0.3s ease-in-out;

  span {
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.71);
  }

  img {
    width: 24px;
  }

  &:hover {
    cursor: pointer;
    background-color: #00000090;
  }
`;
