import axios from 'axios';
import { 
  GET_FACULTY_REQUEST,
  GET_FACULTY_SUCCESS, 
  GET_FACULTY_FAILURE,
} from '../constants/facultyConstants';




export const getFacultyList = (keyword, limit, skip) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FACULTY_REQUEST,
    });
    
    const res = await axios.get(
      `http://localhost:5000/api/faculty?keyword=${keyword}&limit=${limit}&skip=${skip}`
      // headers: {'Authorization': `Bearer ${token}`}
      );

      dispatch({
        type: GET_FACULTY_SUCCESS,
        payload: res.data
      });

  } catch (err) {
    dispatch({
      type: GET_FACULTY_FAILURE,
      payload: err
    });
    console.log(err);
  }
};