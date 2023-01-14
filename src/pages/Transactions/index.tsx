import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Summary } from '../Summary'
import { SearchForm } from './components/SearchForm'
import {
  ArrowContainer,
  PageNumberContainer,
  PaginationContainer,
  PaginationNumber,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
        <PaginationContainer>
          <ArrowContainer variant="disable">
            <CaretLeft size={24} weight="bold" />
          </ArrowContainer>

          <PageNumberContainer>
            <PaginationNumber variant="current">1</PaginationNumber>
            <PaginationNumber variant="inactive">2</PaginationNumber>
            <PaginationNumber variant="inactive">3</PaginationNumber>
          </PageNumberContainer>
          <ArrowContainer variant="active">
            <CaretRight size={24} weight="bold" />
          </ArrowContainer>
        </PaginationContainer>
      </TransactionsContainer>
    </div>
  )
}
