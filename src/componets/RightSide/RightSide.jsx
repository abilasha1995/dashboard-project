import React from 'react'
import './RightSide.css'
import { Updates } from '../Updates/Updates'
import { CustomerReview } from '../CustomerReview/CustomerReview'

export const RightSide = () => {
  return (
   <div className="Rightside">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview/>
        </div>
   </div>
  )
}
