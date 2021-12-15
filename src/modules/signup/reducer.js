import { Map, fromJS } from 'immutable'


export default function SignUpReducer(state = Map(), action) {
    switch (action.type) {
        case 'INSERT_USER_LOADING':
            return state.setIn(['insert_user', 'loading'], action.loading).setIn(['insert_user', 'error'], false)
        case 'INSERT_USER':
            return state.setIn(['insert_user', 'data'], action.data)
                .setIn(['insert_user', 'loading'], action.loading).setIn(['insert_user', 'error'], false)
        case 'INSERT_USER_ERROR':
            return state.setIn(['insert_user', 'data'], action.data)
                .setIn(['insert_user', 'loading'], action.loading).setIn(['insert_user', 'error'], action.error)
        default:
            return state
    }

}