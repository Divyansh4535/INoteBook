import React from 'react'

const Alert = () => {
    return (

        <div className="bg-red-100 mt-[2px] border-y  border-red-500 text-red-700 px-3 py-1" role="alert">
            <p className="text-sm font-bold">Informational message</p>
            <p className="text-xs">Some additional text to explain said message.</p>
        </div>
    )
}

export default Alert