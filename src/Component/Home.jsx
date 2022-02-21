import { useDispatch } from "react-redux";
import { SearchDataController } from "../Redux/creators/Search";
export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <img
        src="https://www.bing.com/th?id=OIP.MFfbEpnryng27dSZpxDaEgHaCa&w=305&h=88&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        alt=""
      />
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(SearchDataController(e.target.value));
          }
        }}
        className="search-box"
        type="text"
        name=""
        id=""
        placeholder="Search..."
      />
    </div>
  );
};
