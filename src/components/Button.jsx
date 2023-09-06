import React from 'react'

function Button ({ label, rounded, width }) {
  const baseClasses = 'py-3 bg-Cyan text-white font-bold hover:bg-Cyan/40 hover:transition-colors duration-100'
  const buttonClases = `${baseClasses} ${rounded} ${width}`
  return (
    <a className={buttonClases} href='#'>{label}</a>
  )
}

export default Button
