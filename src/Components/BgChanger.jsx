
import React, { useState } from 'react'
const BgChanger = () => {
    const [color, setColor] = useState('black');
    return (
        <>
            <div className='h-screen ' style={{ backgroundColor: color }}>
                <div className='flex justify-center '>
                    <div className='p-2 bg-slate-300 w-60 rounded-full'>
                        <button className='m-2'
                            onClick={() => setColor('green')} disabled={color === 'green'}>Green</button>
                        <button className='m-2' onClick={() => setColor('red')}
                            disabled={color === 'red'}>Red</button>
                        <button className='m-2' onClick={() => setColor('yellow')}
                            disabled={color === 'yellow'}>Yellow</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgChanger
