import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchDataController } from "../Redux/creators/Search";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.SearchRedcer);
  useEffect(() => {
    showSearch();
  }, []);

  const showSearch = () => {
    dispatch(SearchDataController());
  };

  console.log(data);
  return (
    <div>
      <div id="navbar" className="searchDiv">
        <img
          className="searchlogo"
          src="https://www.bing.com/th?id=OIP.MFfbEpnryng27dSZpxDaEgHaCa&w=305&h=88&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt=""
        />
        <input type="text" name="" id="" placeholder="Search..." />
        <button className="search">Search</button>
      </div>
      <div>
        <button id="sort-alphabetically">Sort ASC</button>
        <button id="sort-alphabetically-desc">Desc ASC</button>
        <button id="sort-by-date">Sort by Asc Date</button>
        <button id="sort-by-date-desc">Sort by Desc Date</button>
        <button id="sort-by-quality">Sort by Qlty</button>
        <button id=" sort-by-quality-desc">Sort by Qlty Desc</button>
        <button id="filter-explicit">Filter Explict COntent</button>
      </div>
      <div id="search-result">
        {data.map((e) => {
          return (
            <div className="result">
              <p>{e.url}</p>
              <p>{e.author}</p>
              <p>{e.description}</p>
              <p>{e.creationdata}</p>
              <p>{e.explicit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
