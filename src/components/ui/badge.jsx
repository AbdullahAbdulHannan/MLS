import React from 'react'

const Badge = ({text}) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs md:font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{text}</span>
  )
}

export default Badge