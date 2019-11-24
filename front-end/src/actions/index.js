import {FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING} from '../constants';

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchDataLoading(true));

        fetch(url)
            .then(response => {
                dispatch(fetchDataLoading(false));
                console.log(response)
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(fetchDataSuccess(items)))
            .catch(error => dispatch(fetchDataFailure(error)))
    }

}

// true or false
export const fetchDataLoading = (status) => {
    return {
        type: FETCH_DATA_LOADING,
        status
    }
}

// array of trips
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_LOADING_SUCCESS,
        data
    }
}

// error fetching
export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_LOADING_FAILURE,
        error
    }
}
