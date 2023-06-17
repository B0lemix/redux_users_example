import axios from 'axios'
import { setUserList } from '../store/slices/users'

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get('https://reqres.in/api/users?per_page=12')
    .then((response) => {
      dispatch(setUserList(response.data.data))
    })
    .catch((error) => console.log(error))
}
