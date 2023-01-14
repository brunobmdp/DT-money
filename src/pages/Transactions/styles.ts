import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2.5rem 0;
  width: 100%;
`

interface ArrowContainerProps {
  variant: 'active' | 'disable'
}

export const ArrowContainer = styled.span<ArrowContainerProps>`
  svg {
    color: ${(props) => props.theme['green-500']};
    cursor: pointer;

    ${(props) =>
      props.variant === 'disable' &&
      css`
        color: ${(props) => props.theme['gray-600']};
        cursor: not-allowed;
      `}
  }
`

export const PageNumberContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

interface PaginationNumberProps {
  variant: 'current' | 'inactive'
}

export const PaginationNumber = styled.span<PaginationNumberProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-600']};
  line-height: 0;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 6px;

  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  ${(props) =>
    props.variant === 'current' &&
    css`
      background: ${(props) => props.theme['green-700']};
      cursor: default;
    `}
`
