import Filter from "../Components/Filter";
import Categories from "../Components/Categories";
import Card from "../Components/Cards/Cards";
import Skeleton from "../Components/Cards/Skeleton";
import React, { useContext, useState } from "react";
import Pagination from "../Components/Paginations/Pagination";
import { Context } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage, setSort } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router";


const Home = () => {
  const navigate = useNavigate();
  const category = useSelector((state) => state.filter.categoryId);
  const {currentPage} = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const sortType = useSelector(state => state.filter.sort.sortProperty);
  // useSelector - функция закидует состояние в хранилища( глобальным хранилещем являеться файл store.js
  // в котором пока что есть только один срез(это filter) структура которого находиться в файле filterSlice.js)
  // По сути хук useSelector который вытаскивает данныех из глобального хранилища
  // state.filter.categoryId - state это - reducer(store.js), filter это -(обьект reducer в store.js), categoryId - это 
  // обьект в onst initialState(filterSlice.js)  По итогу являеться ноль 0(categoryId: 0, так как вытаскиваем ключ)
  

  const { searchValue } = useContext(Context);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  const onClickCategory = (id) => { // получаем id выбранной категории
    dispatch(setCategoryId(id));
  }
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));//substring(1) нужен что бы убрать ?знак - '?sortType=rating&category=0&currentPage=1' 
  //     // а будет 'sortType=rating&category=0&currentPage=1'

  //     const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
  //     dispatch(setSort({
  //       ...params,
  //       sort,
  //     }))
  //   }
  // }, [])
  React.useEffect(() => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const categoryUrl = category > 0 ? `category=${category}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    setIsLoading(true);
    // fetch(
    //   `https://65290c7355b137ddc83e1bfb.mockapi.io/items?page=${currentPage}&limit=3&${categoryUrl}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });
    axios
    .get(`https://65290c7355b137ddc83e1bfb.mockapi.io/items?page=${currentPage}&limit=3&${categoryUrl}&sortBy=${sortBy}&order=${order}${search}`)
    .then(resposnse => {
      setItems(resposnse.data);
      setIsLoading(false);
    });
  }, [category, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      category,
      currentPage,
    })
    navigate(`?${queryString}`);
  },[category, sortType, searchValue, currentPage])

  return (
    <div>
      <div className="content__top">
        <Categories
          category={category}
          onClickCategory={onClickCategory}
        />
        <Filter />
      </div>
      <div className="content__header">
        <h2 className="content__title">Все пиццы</h2>
      </div>
      <div className="content__items">
        {isLoading
          ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;

// Что бы при запросе на сервер обрабатывались изменения UseState нужно в UseEffect указать зависимость , [category, sort]

// На примере кнопок категорий(мясные, все, острые и тд)
// 1- Когда мы нажмем на любую категорию( у нас сработает в Categories.jsx -  onClick= который вызовет фунцию onClickCategory(index) где мы
// получим индекс той кнопки на котрую нажали
// 2 -Через пропс в const Categories передаем в Home значение индекса который сохраняеться в  - onClickCategory
// 3- В Home пишем useState на весь компонент category -  const [category, setCategory] = useState(0);
// 4 - в аргументы компонента Categories передаем функцию onClickCategory которая в свою очередь вызовет тот самый индекс (i) => setCategory(i)
//   и запишем его в состояние( а именно в функцию setCategory которая перезапишет предыдущее значение)

// На примере при нажатии на сортировке Popup

// 1 - При нажатии на кнопку в Popup(Цене возрост,Названию и тд) мы вызываем функцию и записываем в onClickListItem
//     обьект listObj( что являеться например -{name: 'Популярности возрст', sortProperty: '-rating'} )
// 2 - в функции  const onClickListItem  мы передаем этот же обьект в onClickSort(i); который прокидываем через пропс в Home
// 3 - в Home в аргументы компонента Filter пишем эту функцию onClickSort и записываем этот обьект в состояние setSort(obj)
//     Тем самым в sort у нас будет содержаться обьект(пример если выбрали попул возр) {name: 'Популярности возрст', sortProperty: '-rating'}

// тут sort.sortProperty это из обьекта({name: 'Популярности возрст', sortProperty: '-rating') например -rating
// includes - говорит о том что включает в себя знак минуса (-) если да то боавляем asc если нет то desc
// const order = sort.sortProperty.includes("-") ? "asc" : "desc";
// const sortBy = sort.sortProperty.replace("-", ""); - заменяем минус если он есть ( например -rating станет rating)
// делаем это что бы в сссылке не содержалось минуса - (=-rating&order=desc)
//  https://65290c7355b137ddc83e1bfb.mockapi.io/items?category=4&sortBy=rating&order=desc - преобразованная ссылка(без минуса)
