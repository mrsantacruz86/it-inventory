// import {
//   GET_HOUSE_LIST,
// } from './types';
// import axios from 'axios';
// import { loading, stopLoading } from "./appActions";

// // Get House List
// export const getHouses = () => dispatch => {
//   dispatch(loading());
//   axios
//     .get("/api/houses")
//     .then(res => {
//       const houseList = res.data;
//       // console.log("Lista de casas", houseList);
//       dispatch({
//         type: GET_HOUSE_LIST,
//         payload: houseList
//       });
//       dispatch(stopLoading());
//     })
//     .catch(err => console.log(err));
// };
