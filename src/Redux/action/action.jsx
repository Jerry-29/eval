import {
  FILTER_EXPLICT,
  SEARCH_DATA,
  SHOW_DATA,
  SORTBYDATE_ASC,
  SORTBYDATE_DES,
  SORTBYNAME_ASC,
  SORTBYNAME_DES,
  SORTBYQUALITY_ASC,
  SORTBYQUALITY_DES
} from "../actionType/actionType";

export const searchData = (payload) => {
  return { type: SEARCH_DATA, payload };
};

export const sortbyTitleASC = () => {
  return { type: SORTBYNAME_ASC };
};
export const sortbyTitleDES = () => {
  return { type: SORTBYNAME_DES };
};

export const sortbydateASC = () => {
  return { type: SORTBYDATE_ASC };
};

export const sortbydateDES = () => {
  return { type: SORTBYDATE_DES };
};

export const sortbyqualtyASC = () => {
  return { type: SORTBYQUALITY_ASC };
};

export const sortbyqualtyDES = () => {
  return { type: SORTBYQUALITY_DES };
};

export const filterExplict = () => {
  return { type: FILTER_EXPLICT };
};

export const showData = (payload) => {
  return { type: SHOW_DATA, payload };
};
