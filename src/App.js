import "./app.scss";
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";




export const Context = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      {/* <Context.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              ></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </Context.Provider> */}
    </div>
  );
}

export default App;

// Реакт контекст
// Сначала создаем export const MyContext(например) = React.createContext("");
// помещаем содержимое страницы в обьект MyContext.Provider(где провайдер это компонент) и передаем value(в нашем случаее состояние ) <Context.Provider value={{searchValue, setSearchValue}}>
// Далее мы заходим в тот компонент который нужно(без прокидывание от родителя > дочернему > правнука > и тд) в нашем случаее компонент Search 
// и пишем const {searchValue, setSearchValue} = useContext(Context)
// Проверить что бы подтянулись импорты import { useContext } from "react";  import { Context } from "../../App";
