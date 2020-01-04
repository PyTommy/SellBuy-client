import axios from '../axios';

import {
    SET_PRODUCT_START,
    SET_PRODUCT_SUCCESS,
    SET_PRODUCT_FAIL,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    REFRESH_PRODUCTS_START,
    REFRESH_PRODUCTS_SUCCESS,
    REFRESH_PRODUCTS_FAIL,
    GET_PRODUCT_START,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    ADD_COMMENT_START,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL,
    SET_LIKE_START,
    SET_LIKE_SUCCESS,
    SET_LIKE_FAIL,
    SET_UNLIKE_START,
    SET_UNLIKE_SUCCESS,
    SET_UNLIKE_FAIL,
} from './actionType.js';
import {setAlert} from './alert';

export const createProduct = (formData) => async dispatch => {
    dispatch({
        type: SET_PRODUCT_START
    });

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }


    try {
        const res = await axios.post('/api/products', formData, config);

        dispatch(setAlert("Added Product", "success"));
        dispatch({
            type: SET_PRODUCT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: SET_PRODUCT_FAIL
        });
    }
};



export const getProducts = (skip = 0, limit = 5) => async dispatch => {
    dispatch({
        type: GET_PRODUCTS_START
    });

    try {
        const res = await axios.get(`/api/products?limit=${limit}&skip=${skip}`);

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
    }
};

export const refreshProducts = (skip = 0, limit = 5) => async dispatch => {
    dispatch({
        type: REFRESH_PRODUCTS_START
    });

    try {
        const res = await axios.get(`/api/products?limit=${limit}&skip=${skip}`);

        dispatch({
            type: REFRESH_PRODUCTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: REFRESH_PRODUCTS_FAIL
        });
    }
};


export const getProduct = (productId) => async dispatch => {
    dispatch({
        type: GET_PRODUCT_START
    });

    try {
        const res = await axios.get(`/api/products/${productId}`);

        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: GET_PRODUCT_FAIL
        });
    }
};

export const deleteProduct = (productId) => async dispatch => {
    dispatch({
        type: DELETE_PRODUCT_START
    });

    try {
        await axios.delete(`/api/products/${productId}`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: productId
        });
        dispatch(setAlert("Product deleted", "success"));
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: DELETE_PRODUCT_FAIL
        });
    }
};

export const addComment = (productId, text) => async dispatch => {
    dispatch({
        type: ADD_COMMENT_START
    });

    try {
        const res = await axios.post(`/api/products/comment/${productId}`, {text});
        
        dispatch(setAlert("Added Comment", "success"));
        dispatch({
            type: ADD_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: ADD_COMMENT_FAIL
        });
    }
};

export const setLike = (productId) => async dispatch => {
    dispatch({
        type: SET_LIKE_START
    });

    try {
        const res = await axios.put(`/api/products/like/${productId}`);        
        dispatch({
            type: SET_LIKE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: SET_LIKE_FAIL
        });
    }
};
export const setUnlike = (productId) => async dispatch => {
    dispatch({
        type: SET_UNLIKE_START
    });

    try {
        const res = await axios.put(`/api/products/unlike/${productId}`);        
        dispatch({
            type: SET_UNLIKE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: SET_UNLIKE_FAIL
        });
    }
};