import styled, { css } from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
  `}
`;
export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    overflow: hidden;
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

export const Carousel = styled(Slider)`
  ${() => css`
    .slick-slide {
      margin-right: 16px;
    }
  `}
`;

export const WrapperMap = styled.div`
  ${() => css`
    width: 70%;
  `}
`;
