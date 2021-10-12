import axios from 'axios';
import { GET_BREEDS } from './types';

export const getBreeds= () => dispatch => {
  dispatch(setSongLoading());

  axios.get('http://localhost:5000/dogbreeds', {
      })
      .then(res => dispatch({
          type: GET_BREEDS,
          payload: res.data
      })
  );
};
