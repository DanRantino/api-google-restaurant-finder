import styled, { css } from 'styled-components';

export const Conatiner = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
  `}
`;

export const Search = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
  `}
`;

export const Logo = styled.img`
  ${() => css`
    margin-bottom: 15px;
  `}
`;

export const CarouselTitle = styled.h1`
  ${(props) => css`
    font-family: ${props.theme.fonts.fontFamily}, sans-serif;
    color: ${props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
  `}
`;
