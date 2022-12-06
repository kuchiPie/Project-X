import axios from 'axios';

export const passReset = (body) => async (dispatch) => {
    try {  
        const res = await axios.post(
            `http://localhost:5000/api/forgotPW`,
            body
        );
        return {message: res};

    } catch (err) {
        return err;
    }
  };