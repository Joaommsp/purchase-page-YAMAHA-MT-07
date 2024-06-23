import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #080808;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 196px;

  padding: 5rem 4rem;
  position: relative;

  .logo {
    width: 106px;
  }

  .footerSection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footerSectionTitle {
    font-weight: 500;
    color: #fefefe;

    display: block;
    margin-bottom: 0.5rem;
  }

  .footerSectionlink {
    font-weight: 300;
    font-size: 0.9rem;
    color: #fefefe;
  }

  .footerSectionlink:hover {
    color: #c3f783;
  }

  a {
    text-decoration: none;
  }

  .footerSections {
    display: flex;
    gap: 128px;
    flex-wrap: wrap;
  }

  .socialLinks {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .socialLinks img {
    width: 24px;
  }

  .atribuiton {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 300;
  }

  .atribuiton strong {
    color: #c3f783;
    font-weight: 300;
  }

  @media only screen and (max-width: 600px) {
    padding: 3rem 2rem 8rem 2rem;
    gap: 56px;
    flex-direction: column;

    .logo {
      width: 104px;
    }

    .footerSections {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 56px;
    }

    .atribuiton {
      width: 100%;
      text-align: center;
      padding: 0 2rem;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.7rem;
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    padding: 3rem 2rem 8rem 2rem;
    gap: 56px;
    flex-direction: column;

    .logo {
      width: 104px;
    }

    .footerSections {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }

    .atribuiton {
      width: 100%;
      text-align: center;
      padding: 0 2rem;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.7rem;
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 1000px) and (max-width: 1200px) {
    padding: 3rem 5rem 8rem 4rem;
    gap: 56px;
    flex-direction: column;

    .logo {
      width: 104px;
    }

    .footerSections {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .atribuiton {
      width: 100%;
      text-align: center;
      padding: 0 2rem;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.7rem;
      font-weight: 300;
    }
  }
`;
