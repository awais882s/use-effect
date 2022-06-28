import React, { useState } from 'react'
export default function Hook() {
    const [count, setCount] = useState(0)
    const decrementHandler = () => {
        setCount(count - 1);
        count > 0 ? setCount(count - 1) : setCount(0)
    }
    return (
        <div className='py-5'>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-primary'>useState Hook</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <button className='btn btn-success' onClick={() => { setCount(count + 1) }}>Increment</button>
                        <h3 className='my-4'>{count}</h3>
                        <button className='btn btn-primary' onClick={() => { decrementHandler() }}>Decrement</button><br />
                        <button className='btn btn-warning mt-4' onClick={() => { setCount(0) }}>Reset </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
