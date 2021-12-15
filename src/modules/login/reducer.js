import { Map, fromJS } from 'immutable'


export default function LoginReducer(state = Map(), action) {
    switch (action.type) {
        case 'LOGIN_LOADING':
            return state.setIn(['login', 'loading'], action.loading).setIn(['login', 'error'], false)
        case 'LOGIN_AUTH':
            return state.setIn(['login', 'data'], action.data)
                .setIn(['login', 'loading'], action.loading).setIn(['login', 'error'], false)
        case 'LOGIN_ERROR':
            return state.setIn(['login', 'data'], action.data)
                .setIn(['login', 'loading'], action.loading).setIn(['login', 'error'], action.error)
        default:
            return state
    }

}