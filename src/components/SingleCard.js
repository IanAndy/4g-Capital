import React from 'react'

const SingleCard = ({item}) => (
  <div className="col-md-4">
    <div className="card">
      <div className="post-content">
        <h1 className="title"> <span>Name:</span>{item.firstname}</h1>
        <p className="description"><span>Email:</span> {item.email}</p>
        <p className="description"><span>Number:</span>{item.number}</p>
        <p className="description"><span>Branch:</span>{item.branch}</p>
        <p className="description"><span>Loan:</span>KSH {item.amount}</p>
      </div>
    </div>
  </div>
)

export default SingleCard