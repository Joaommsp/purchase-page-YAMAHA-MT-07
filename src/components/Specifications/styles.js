import styled from "styled-components";

export const SpecificationElement = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 0.5143376039655021) 35%,
    rgba(0, 0, 0, 0.8514162556508954) 100%
  );

  padding: 0rem 8rem 4rem 8rem;

  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 40px;

    padding: 0rem 0.5rem 2rem 0.5rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 40px;

    padding: 0rem 0.5rem 2rem 0.5rem;
  }
`;

export const SpecificationTextContent = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h2`
  width: 50%;
  font-size: 5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.71);
  line-height: 1.2;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const BikeName = styled.span`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.71);
  margin-left: 0.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
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
    border-radius: 5px;
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
  border-radius: bikeDataTitle 5px;
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

  @media only screen and (max-width: 600px) {
    span {
      font-size: 0.8rem;
    }
  }
`;

export const GalleryContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  align-items: center;

  .gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
  }

  .galleryImage {
    width: 236px;
    border-radius: 2px;
    box-shadow: 0.9px 1.2px 3.6px rgba(0, 0, 0, 0.101),
      2.5px 3.3px 10px rgba(0, 0, 0, 0.145),
      6px 7.8px 24.1px rgba(0, 0, 0, 0.189), 20px 26px 80px rgba(0, 0, 0, 0.29);

    transition: 0.5s ease-in-out;
  }

  .galleryImage:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    .gallery {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: .5rem;
    }

    .galleryImage {
      width: 100%;
    }

    .galleryImage:hover {
      cursor: pointer;
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    width: 100%;

    .gallery {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: 2rem;
    }

    .galleryImage {
      width: 33.3%;
    }

    .galleryImage:hover {
      cursor: pointer;
      transform: scale(1);
    }
  }
`;

export const BikeData = styled.div`
  width: 100%;
  height: 100%;

  padding: 4rem 8rem 4rem 8rem;
  background-color: #191919;

  display: flex;

  .bikeDataText {
    width: 50%;
  }

  .bikeDataTitle {
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .bikeDataTitle strong {
    color: #c4fb6d;
  }

  .bikeDataDescription {
    font-size: 0.8rem;
    color: #b4b4b8;
    margin-bottom: 2rem;
  }

  .logoMtContainer {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logoMT {
    width: 224px;
  }

  .statsContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
  }

  .stat {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .statValue {
    width: 100%;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #c4fb6d;

    color: #c4fb6d;
    font-size: 1.5rem;
    font-family: "Anta", sans-serif;
  }

  .statName {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    flex-direction: column;

    padding: 2rem 1rem 2rem 1rem;

    .bikeDataText {
      width: 100%;
      margin-bottom: 40px;
    }

    .bikeDataTitle {
      width: 80%;
      color: #ffffff;
      font-size: 1rem;
    }

    .bikeDataDescription {
      font-size: 0.8rem;
    }

    .statsContainer {
      flex-direction: column;
    }

    .logoMtContainer {
      width: 100%;
    }

    .logoMT {
      width: 200px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    width: 100%;

    flex-direction: column;

    padding: 2rem 1rem 2rem 1rem;

    .bikeDataText {
      width: 100%;
      margin-bottom: 40px;
    }

    .bikeDataTitle {
      width: 80%;
      color: #ffffff;
      font-size: 1rem;
    }

    .bikeDataDescription {
      font-size: 0.8rem;
    }

    .statsContainer {
      flex-direction: row;
    }

    .logoMtContainer {
      width: 100%;
    }

    .logoMT {
      width: 200px;
    }
  }
`;
