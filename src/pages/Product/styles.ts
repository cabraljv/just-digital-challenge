import styled from 'styled-components';
import theme from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.content {
    width: 90%;
    max-width: 1160px;
    margin: 0 auto;
    div.product-data {
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div.product-top {
        display: flex;
        @media (max-width: 720px) {
          flex-direction: column;
          img {
            width: 100%;
            height: 100%;
            margin-bottom: 10px;
          }
        }
        div.specs {
          ul {
            li {
              span {
                font-weight: bold;
                padding-right: 10px;
              }
            }
          }
        }
      }
      div.product-bottom {
        margin-top: 10px;
      }
      img {
        width: 40%;
        height: 100%;
      }

      div.info {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 5%;
        div.header {
          h1 {
            font-weight: 800;
            font-size: 1.4rem;
          }
          span {
            display: flex;
            justify-content: space-between;
            p:first-of-type {
              font-size: 18px;
              line-height: 25px;
            }
            p:last-of-type {
              font-size: 14px;
              color: ${theme.light_text};
            }
          }
          margin-bottom: 20px;
        }
        p.description {
          font-size: 1rem;
          color: ${theme.light_text};
        }
        div.footer {
          margin-top: auto;
          display: flex;
          @media (max-width: 720px) {
            flex-direction: column;
          }
          button {
            background: none;
            border: 2px solid ${theme.primary};
            color: ${theme.primary};
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 15px 25px;
            border-radius: 15px;
            transition: background 0.4s;
            display: flex;
            align-items: center;
            p {
              padding-left: 5px;
            }
          }
          button:hover {
            background: ${theme.primary};
            color: #fff;
            filter: drop-shadow(0px 0px 5px ${theme.primary});
          }
          div.price {
            margin-top: 20px;
            display: flex;
            margin-left: auto;
            margin-right: 80px;
            span.price-value {
              font-size: 12px;
              color: #666;
              display: flex;
              span {
                color: ${theme.primary};
                font-size: 36px;
                font-weight: bold;
                margin-top: -6px;
                margin-left: 2px;
              }
            }
          }
        }
      }
    }
    p.recomended-text {
      margin-top: 90px;
      margin-bottom: 40px;
      font-weight: 300;
      font-size: 36px;
    }
    div.recomended-products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 30px;
      div.grid-item {
        border: 1px solid red;
        width: 100%;
        height: 200px;
      }
      @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
      }
    }
  }
`;
