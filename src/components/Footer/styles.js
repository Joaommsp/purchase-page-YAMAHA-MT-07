import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #080808;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 196px;

  padding: 5rem 8rem;
  position: relative;

  .logo {
    width: 156px;
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
`;
