import * as Types from "./actionTypes";


const initialState = {
  data: {},
  error: false,
  isLoading: false,
};

const fetchImageData = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.GET_IMAGE_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_IMAGE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
      };
    case Types.GET_IMAGE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchImageData;