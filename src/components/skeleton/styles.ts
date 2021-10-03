import styled, { css, keyframes } from 'styled-components';

const keyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

type props = {
    width: string;
    height: string;
}

export const Loadingskeleton = styled.div<props>`
  ${(props) => css`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${props.width};
    height: ${props.height};
    animation: ${keyFrameLoading} 500ms infinite alternate;
  `}
`;
