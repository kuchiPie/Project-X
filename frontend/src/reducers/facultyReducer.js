import { 
  GET_FACULTY_REQUEST,
  GET_FACULTY_SUCCESS, 
  GET_FACULTY_FAILURE,
} from '../constants/facultyConstants';

export default function getFacultyReducer(state = [], action) {
    switch (action.type) {

        case GET_FACULTY_REQUEST:
            return [
              ...state, action.payload
            ];

        case GET_FACULTY_SUCCESS:
            return [
              ...state, action.payload
            ];

        case GET_FACULTY_FAILURE:
            return [
              ...state, action.payload
            ];
          
        default:
            return state;
    }
}