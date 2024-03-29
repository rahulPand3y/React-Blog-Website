import React , {forwardRef, useId}from 'react'

const Input = forwardRef(function Input({
    label,
    type="text",
    classname="",
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
                {label}
            </label>}
            <input type={type} className= {`
            px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-grey-50 duration-200 border-gray-200 w-full 
            ${classname}`}
            {...props}
            ref={ref}
            id={id}/>
        </div>
    )
})

export default Input