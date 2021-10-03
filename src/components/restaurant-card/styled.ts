import styled, { css } from 'styled-components';

export const Restaurant = styled.div`
  ${(props) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #ffffff;
    border-left: 5px solid transparent;

    :hover {
      background-color: ${props.theme.colors.background};
      border-left-color: ${props.theme.colors.primary};
    }
  `}
`;

export const RestaurantInfo = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const RestaurantTitle = styled.span`
  ${(props) => css`
    font-family: ${props.theme.fonts.fontFamily};
    color: ${props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
  `}
`;

export const RestaurantAdress = styled.span`
  ${(props) => css`
    font-family: ${props.theme.fonts.fontFamily};
    color: ${props.theme.colors.text};
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    margin-top: 10px;
  `}
`;

export const RestaurantPhoto = styled.img`
  ${() => css`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  `}
`;
