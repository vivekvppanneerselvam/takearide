import serverCall from '../../serverCall'

export const insertUser = (payload) => {
    return dispatch => {
        dispatch({ type: 'INSERT_USER_LOADING', loading: true })
        return serverCall({ method: 'POST', url: `/api/user`, data: payload }).then((res) => {
            return dispatch({ type: 'INSERT_USER', data: res.data, loading: false })
        }).catch(error => {
            let error_msg = (error.response) ? error.response : error
            dispatch({ type: 'INSERT_USER_ERROR', data: error_msg, loading: false, error: true })
        })
    }
}

