
import React from 'react'

const ShimmerUI = () => {
  return (
<div className="grid grid-cols-4 gap-6 pl-4 pr-4 pb-4 pt-8">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="shimmer rounded-lg bg-gray-200 animate-pulse"
          style={{ width: '284px', height: '256px' }}
        ></div>
      ))}
    </div>
  )
}

export default ShimmerUI
