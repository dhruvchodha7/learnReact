import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  {id:'q1', author: 'Max', text:'Learning react is fun'},
  {id:'q2', author: 'dhruv', text:'Learning react is not fun'}
]
const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes