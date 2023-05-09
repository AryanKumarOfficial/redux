import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
const Shop = () => {
    const dispatch = useDispatch()
    const { withdrowamount, depositamount } = bindActionCreators(actionCreators, dispatch)
    return (
        <>
            <div className="container my-4">
                <h2 className='my-4'>Deposit/Withdrow Money</h2>
                {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrowamount(100)) }}>-</button>
                Update balance
                <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositamount(100)) }}>+</button>
                 */}
                <button className="btn btn-primary mx-2" onClick={() => { withdrowamount(100) }}>-</button>
                Update balance
                <button className="btn btn-primary mx-2" onClick={() => { depositamount(100) }}>+</button>
            </div>
        </>
    )
}

export default Shop
