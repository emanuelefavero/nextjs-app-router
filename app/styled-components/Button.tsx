'use client'

import styled from 'styled-components'

type Variant = 'primary' | 'secondary'

export const Button = styled.button<{ $variant?: Variant }>`
  background: ${(props) =>
    props.$variant === 'primary' ? 'var(--primary)' : '#333'};
  color: '#fff';
  font-size: 1rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${(props) =>
      props.$variant === 'primary' ? '#bf2fd5' : '#282828'};
  }

  &:active {
    scale: 0.95;
  }
`

Button.defaultProps = {
  $variant: 'primary',
}
