import React, { useState } from 'react'
export default function Hook() {
    const [count, setCount] = useState(0)
    const decrementHandler = () => {
        setCount(count - 1);
        count > 0 ? setCount(count - 1) : setCount(0)
    }
    return (
        <div div className="container py-5" >
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-primary'>useState Hook</h1>
                </div>
            </div>
            <div className="row mt-4 text-center">
                <div className="col">
                    <button className='btn btn-success' onClick={() => { setCount(count + 1) }}>Increment</button>
                    <h3 className='mb-4 my-4'>{count}</h3>
                    <button className='btn btn-primary' onClick={() => { decrementHandler() }}>Decrement</button>

                </div>
            </div>
        </div>
    );
}
