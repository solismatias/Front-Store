import { gql } from '@apollo/client';
const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
  `
const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`


export { GET_CATEGORIES, GET_CURRENCIES }