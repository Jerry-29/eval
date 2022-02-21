import axios from "axios";
import { searchData, showData } from "../action/action";

export const SearchDataController = (payload) => (dispatch) => {
  axios
    .get(`https://fast-reef-22226.herokuapp.com/data`)
    .then((res) => {
      dispatch(searchData());
      // console.log(res.data)
      let Dat = res.data;
      const data = Dat.slice().filter((word) => word.title === payload);
      console.log(data);
      dispatch(showData(data));
    })
    .catch((err) => {
      console.log(err);
    });
};
