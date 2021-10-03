import styled, { css } from 'styled-components';
import { imageCardProps } from '../../types/imageCardProps';

export const Card = styled.div<imageCardProps>`
  ${({ url }) => css`
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${url});
    background-size: cover;
  `}
`;

export const Title = styled.p`
  ${(props) => css`
    display: flex;
    justify-items: center;
    font-family: ${props.theme.fonts.fontFamily};
    color: #ffffffff;
    font-size: 16px;
  `}
`;
