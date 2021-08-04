import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchImageData =
  ( searchValue, pageNo ) => async (dispatch) => {
    dispatch({
      type: actionTypes.GET_IMAGE_DATA,
    });
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=zKuJcWptfwqPbfi-tC5dMaTSx-cxYIHnhEfK9HDadRM&page=${pageNo}&per_page=8`
      );
      dispatch({
        type: actionTypes.GET_IMAGE_DATA_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_IMAGE_DATA_FAILED,
        payload: { data: error },
      });
    }
  };