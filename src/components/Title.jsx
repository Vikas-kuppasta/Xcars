import React from 'react'

function Title({title, subtitle}) {
    return (
        <main className='text-center flex flex-col gap-3 '>
            <h1 className='text-black text-5xl font-semibold'>{title}</h1>
            <p className='text-gray-500 '>{subtitle}</p>
        </main>
    )
}

export default Title
