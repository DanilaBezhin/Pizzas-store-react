import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortType } from '../../redux/slices/filterSlice';

const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [indexSort, setIndexSort] = useState(0);
  const dispatch = useDispatch();
  const list = [
    { name: 'популярности', sort: 'rating&order=desc' },
    { name: 'цене (убывание)', sort: 'price&order=desc' },
    { name: 'цене (возрастание)', sort: 'price&order=asc' },
    { name: 'алфавиту (с начала)', sort: 'title&order=desc' },
    { name: 'алфавиту (с конца)', sort: 'title&order=asc' },
  ];
  const sortRef = useRef();

  function onClickItemList(sort, i) {
    dispatch(setSortType(sort));
    setIsVisible(false);
    setIndexSort(i);
  }

  useEffect(() => {
    const sortClickOutside = (event) => {
      if (!event.target.closest('.sort')) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener('click', sortClickOutside);

    return () => {
      document.body.removeEventListener('click', sortClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        {isVisible ? '▼ Сортировка по:' : '▲ Сортировка по:'}
        <b></b>
        <span onClick={() => setIsVisible(!isVisible)}>{list[indexSort].name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {list.map((el, i) => (
              <li
                onClick={() => onClickItemList(el.sort, i)}
                key={i}
                className={indexSort === i ? 'active' : ''}>
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
