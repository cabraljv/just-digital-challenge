import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  margin: 0 auto;
  header {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 49px;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      color: #787878;
    }
  }
  div.products-content {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 960px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 720px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
    }
    grid-gap: 50px;
  }
`;
