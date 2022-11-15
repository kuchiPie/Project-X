import axios from 'axios';

const FACULTY_API = "http://localhost:5000/api/faculty/";

export const registerService = (username, email, password) => {
  return axios.post(FACULTY_API + "signup", {
    username,
    email,
    password,
  });
};

export const loginService = async (email, password) => {
  const response = await axios
        .post(FACULTY_API + "login", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export const logoutService = () => {
  localStorage.removeItem("user");
};

// export const facultyLoginService = (body) => async (dispatch) => {
//     try {
//       dispatch({
//         type: LOGIN_REQUEST,
//       });
      
//       const res = await axios.get({
//         url:'http://localhost:5000/api/faculty/login',
//         // headers: {'Authorization': `Bearer ${token}`},
//         body
//       }
//         );
  
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: res.data
//         });
  
//     } catch (err) {
//       dispatch({
//         type: LOGIN_FAIL,
//         payload: err
//       });
//       console.log(err);
//     }
//   };