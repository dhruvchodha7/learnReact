import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li><Link to='/products/p1'>A Book</Link></li>
        <li><Link to='/products/p2'>car</Link></li>
        <li><Link to='/products/p3'>Online Course</Link></li>
      </ul>
    </section>
  )
}

export default Products