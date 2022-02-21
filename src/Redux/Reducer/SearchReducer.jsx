import {
  SEARCH_DATA,
  SHOW_DATA,
  SORTBYDATE_ASC,
  SORTBYNAME_ASC,
  SORTBYNAME_DES,
  SORTBYQUALITY_ASC,
  SORTBYQUALITY_DES
} from "../actionType/actionType";

const init = {
  data: []
};

export const SearchReducer = (store = init, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA:
      return { ...store };
    case SHOW_DATA:
      return { ...store, data: payload };
    case SORTBYNAME_ASC:
      let data = data.slice();
      data.sort((a, b) => (a.title < b.title ? 1 : -1));
      return { ...store, data: data };

    case SORTBYNAME_DES:
      let data1 = data.slice();
      data1.sort((a, b) => (a.title > b.title ? 1 : -1));
      return { ...store, data: data };
    case SORTBYQUALITY_ASC:
      let data2 = data.slice();
      data2.sort((a, b) => (a.quality > b.quality ? -1 : 1));
      return { ...store, data: data };
    case SORTBYQUALITY_DES:
      let data3 = data.slice();
      data3.sort((a, b) => (a.quality > b.quality ? -1 : 1));
      return { ...store, data: data };
    default:
      return { ...store };
  }
};
