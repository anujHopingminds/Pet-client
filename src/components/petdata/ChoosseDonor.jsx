import React from 'react'
import { Link } from 'react-router-dom'

function ChoosseDonor() {
  return (
    <div>
      <h1>Choose Method</h1>
      <ul>
        <li>
            <Link to='/donor'>as Donor</Link>
        </li>
        <li>
            <Link>as Adopter</Link>
        </li>
      </ul>
    </div>
  )
}

export default ChoosseDonor
