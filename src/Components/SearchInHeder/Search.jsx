import { useContext } from "react";
import style from "./Search.module.scss";
import { Context } from "../../App";

const Search = () => {
  const {searchValue, setSearchValue} = useContext(Context)
  return (
    <div className={style.root}>
      <svg
        
        className={style.search}
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
      </svg>
      <input 
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      className={style.inp} 
      placeholder="Поиск по сайту" />
      <svg
        onClick={() => setSearchValue('')}
        className={style.delBut}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="512px"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xmlSpace="preserve"
      >
        <style type="text/css">
          {`
          .st0{display:inline;}
          .st1{fill:none;stroke:#000000;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          .st2{display:none;}
        `}
        </style>
        <g className="st2" id="cross">
          <g className="st0">
            <line className="st1" x1="112.5" x2="401" y1="112.5" y2="401" />
            <line className="st1" x1="401" x2="112.5" y1="112.5" y2="401" />
          </g>
        </g>
        <g id="cross_copy">
          <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" />
        </g>
      </svg>
    </div>
  );
};

export default Search;
