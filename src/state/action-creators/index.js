export const depositamount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrowamount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdrow",
            payload: amount
        })
    }
}
