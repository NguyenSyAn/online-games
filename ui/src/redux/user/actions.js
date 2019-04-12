import request from '../services/http'
import userConstants from './constants'

export const userActions = {
    register: (name, email, password)  => {
        return function (dispatch){
            request.post('/users',
                {
                    username: name,
                    email: email,
                    password: password,
                    bio: ""
                }
            )
            .then(function (response) {
                dispatch({
                    type: userConstants.REGISTER_SUCCESS
                });
            })
            .catch(function (error) {
                dispatch({
                    type: userConstants.REGISTER_FAIL,
                    payload: error
                });
            })
            
        }
    },
    login: (email, password, history)  => dispatch => {
        request.post('/auth',
            {
                "email": email,
                "password": password
            }
        ).then(function (response) {
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: {
                    fullname: response.data["data"]["username"],
                    bio: response.data["data"]["bio"],
                    email: response.data["data"]["email"],
                    token:  response.data["data"]["token"]
                }
            });
            history.push("/")
        })
        .catch(function (error) {
            dispatch({
                type: userConstants.LOGIN_FAIL,
                payload: error
            });
        })
    },
    logout: (history)  => dispatch => {
        request.delete('/auth'
        ).then(function (response) {
            dispatch({
                type: userConstants.LOGOUT_SUCCESS
            });
            history.push("/login")
        })
        .catch(function (error) {
            dispatch({
                type: userConstants.LOGOUT_FAIL,
                payload: error
            });
            history.push("/login")
        })
    },
    update: (user)  => dispatch => {
        if (user.new_password === "" || user.old_password === "") {
            delete user.new_password;
            delete user.old_password;
        }

        // Fix field name
        user.username = user.fullname;

        request.put('/users/my_account', user
        ).then(function (response) {
            dispatch({
                type: userConstants.UPDATE_SUCCESS,
                payload: user
            });
        })
        .catch(function (error) {
            dispatch({
                type: userConstants.UPDATE_FAIL,
                payload: error
            });
        })
    }
}