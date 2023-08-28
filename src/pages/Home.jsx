import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import PizzaBlock from '../components/pizza/Pizza';
import Skeleton from '../components/pizza/Skeleton';
import dataCategory from '../components/categories/dataCategory';
import Search from '../components/search/Search';
import Paginate from '../components/pagination/Pagination';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [PizzasDataApi, setPizzasDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const activeCategory = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const activePagePaginate = useSelector((state) => state.filter.activePagePaginate);
  const [pageCount, setPageCount] = useState(10);

  useEffect(() => {
    setIsLoading(true);

    let rightActPagePag = activePagePaginate === '' ? '1' : activePagePaginate;
    let rightActCategory = activeCategory === '0' ? '' : activeCategory;

    axios
      .get(
        `https://64abe1a39edb4181202ebbe2.mockapi.io/list_learning?page=${rightActPagePag}&limit=4&category=${rightActCategory}&sortBy=${sortType}`,
      )
      .then((res) => {
        setPizzasDataApi(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(`Ошибка получения данных с сервера: \n"${err}"`);
      });
  }, [activeCategory, sortType, activePagePaginate]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories dataCategory={dataCategory} />
        <div className="content__top-flex">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Sort />
        </div>
      </div>
      <h2 className="content__title">{dataCategory[activeCategory].title}</h2>
      <div className="content__items">
        {/* можно сделать поиск и через мокапи (бекенд) вводя данные с инпута в ссылку запроса оптимизировав с помощью debounce */}
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : PizzasDataApi.filter((el) => {
              if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
              }
              return false;
            }).map((el, i) => <PizzaBlock key={i} {...el} />)}
      </div>
      <Paginate
        pageCount={pageCount}
        setPageCount={setPageCount}
        activePagePaginate={activePagePaginate}
      />
    </div>
  );
};

export default Home;
