import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;

  background-color: #191919;
  padding: 4rem 8rem 4rem 8rem;

  .aboutTheme {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .aboutThemeMain {
    width: 50%;
  }

  .aboutThemeTitle {
    width: 100%;
    font-size: 0.8rem;
    display: block;
  }

  .aboutThemeEmphasis {
    font-size: 1.5rem;
    color: #c9f979;
  }

  .aboutThemeTextContainer {
    width: 50%;
  }

  .aboutThemeText {
    font-size: 0.8rem;
  }

  .galleryTheme {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 4rem;
  }

  .galleryImage {
    width: 33.3%;
    border-radius: 2px;
  }

  .alignRight {
    text-align: right;
  }

  .noMargin {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem 2rem 1rem;

    .aboutTheme {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .aboutThemeMain {
      width: 100%;
    }

    .aboutThemeTextContainer {
      width: 100%;
    }

    .aboutThemeEmphasis {
      font-size: 1rem;
    }

    .galleryTheme {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      padding: 0rem;
      margin-bottom: 4rem;
    }

    .galleryImage {
      width: 100%;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    padding: 2rem 1rem 2rem 1rem;

    .aboutTheme {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .aboutThemeMain {
      width: 100%;
    }

    .aboutThemeTextContainer {
      width: 100%;
    }

    .aboutThemeEmphasis {
      font-size: 1rem;
    }

    .galleryTheme {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 1rem;
      padding: 1rem;
      margin-bottom: 4rem;
    }

    .galleryImage {
      width: 33.3%;
    }
  }
`;
