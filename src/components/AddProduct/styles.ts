import styled from 'styled-components';
import theme from '../../styles/themes';

interface Props {
  active?: boolean;
}

export const Container = styled.div<Props>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  transition: background 0.2s;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
  main {
    margin: auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 30px;
    max-width: 70%;
    div.buttons {
      display: flex;
      button:first-of-type {
        background: none;
        border: 0;
        padding: 3px 5px;
        color: ${theme.light_text};
        font-size: 16px;
        margin-left: auto;
      }
      button:first-of-type:hover {
        color: #ef3030;
      }

      button:last-of-type {
        background: none;
        border: 2px solid ${theme.primary};
        color: ${theme.primary};
        font-weight: 700;
        letter-spacing: 0.04em;
        padding: 10px 15px;
        border-radius: 15px;
        transition: background 0.4s;
        display: flex;
        align-items: center;
        margin-left: 5px;

        p {
          font-size: 14px;
          @media (max-width: 700px) {
            font-size: 12px;
          }
          padding-left: 5px;
        }
      }
      button:last-of-type:hover {
        background: ${theme.primary};
        color: #fff;
        filter: drop-shadow(0px 0px 5px ${theme.primary});
      }
    }
    div.product-content {
      display: flex;
      padding-bottom: 20px;
      img {
        @media (max-width: 700px) {
          display: none;
        }
        width: 40%;
        height: 100%;
      }

      div.product-info {
        p.title {
          text-transform: uppercase;
          font-size: 1rem;
          color: ${theme.text};
          font-weight: bold;
        }
        div.price {
          margin-top: 20px;
          display: flex;
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
          p.suport-text {
            color: #666;
            margin-top: auto;
            margin-bottom: 10px;
            font-size: 12px;
            padding-left: 8px;
          }
        }
        div.units {
          display: flex;
          margin-top: 15px;
          align-items: flex-end;
          input {
            width: 40px;
            height: 30px;
            padding: 3px;
            font-size: 16px;
            color: ${theme.light_text};
            background: none;
            border-radius: 4px;
            border: 1px solid ${theme.light_text};
            margin-right: 5px;
          }
          p {
            font-size: 18px;
          }
        }
        p.total-product {
          font-size: 20px;
          padding-top: 20px;
          font-weight: lighter;
          font-size: 16px;
          span {
            font-weight: bold;
            color: ${theme.primary};
            font-size: 18px;
          }
        }
      }
    }
  }
`;
