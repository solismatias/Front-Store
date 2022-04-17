import { gql } from '@apollo/client';
const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
  `
const GET_CURRENCIES = gql`
  query getCurrencies{
    currencies {
      label
      symbol
    }
  }
`
const GET_PRODUCTS = gql`
query getProducts($category: String!) {
  category(input: { title: $category }) {
    name
    products {
      id
      name
      gallery
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      inStock
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
}
`


export { GET_CATEGORIES, GET_CURRENCIES }