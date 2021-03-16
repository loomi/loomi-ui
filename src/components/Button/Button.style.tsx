import styled, { css } from 'styled-components';

type ButtonProps = {
  primary?: boolean,
  secondary?: boolean,
  size?: ('small' | 'medium' | 'large'),
}

export const Button = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ primary }) => primary && css`
    color: white;
    background-color: #1ea7fd;
  `}

  ${({ secondary }) => secondary && css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${({ size = 'medium' }) => {
    const sizeMap = {
      small: { fontSize: '12px', padding: '10px 16px' },
      medium: { fontSize: '14px', padding: '11px 20px' },
      large: { fontSize: '16px', padding: '12px 24px' },
    };

    return css`
      font-size: ${sizeMap[size].fontSize};
      padding: ${sizeMap[size].padding};
    `;
  }}
`;