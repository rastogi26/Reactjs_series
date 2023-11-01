import React from 'react'

// parameters that are accepting text
function Button ({
    children,
    //below are default values
    type = 'button',
    bgColor ='bg-blue-600',
    textColor = 'text-white',
    //className is blank so that if user want to inject more style it can do it.
    className='',
    // we use this spreading props because if user gives more properties other than className then we can inject in it easily
    ...props

})
{
  return (
    <button  className={`px4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button