import React, { useId } from 'react'

// In this component we have make a separeate input field compnent so that code reusibility increases

const Input = React.forwardRef(function Input({
      label,
      //by default
      type="text",
      className='',
      ...props
             
},ref){
    const id = useId()
    return (
        <div className=' w-full'>
             {/* if label is pass then only display */}
             {label && <label 
                className=' inline-block mb-1 pl-1'
                //we use htmlfor to generate unique id for accessibilty purpose
                htmlFor={id}
             >{label}
             </label>
             }

             <input
              type={type}
              className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200  w-full   ${className}`}
              ref={ref}
              {...props}
              id={id}
             />
        </div>
    )
})


export default Input