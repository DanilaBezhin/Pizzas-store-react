import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { setActivePagePaginate } from '../../redux/slices/filterSlice';

const Categories = ({ dataCategory }) => {
  const [burger, setBurger] = useState(false);
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.categoryId);
  const categoryRef = useRef();

  const clickCategory = (event) => {
    dispatch(setCategoryId(event.target.getAttribute('data-category')));
    setBurger(false);
    dispatch(setActivePagePaginate('1'));
  };

  const clickBurger = () => {
    if (burger) {
      setBurger(false);
    } else {
      setBurger(true);
    }
  };

  useEffect(() => {
    const categoryClickOutside = (event) => {
      if (!event.target.closest('.categories')) {
        setBurger(false);
      }
    };

    document.body.addEventListener('click', categoryClickOutside);

    return () => {
      document.body.removeEventListener('click', categoryClickOutside);
    };
  }, []);

  return (
    <div ref={categoryRef} className="categories">
      <div className="categories__burger" onClick={() => clickBurger()}>
        <span>{burger ? '▼ ' : '▲ '}</span>
        <span className="categories__burger__title">{dataCategory[activeCategory].title}</span>
      </div>
      <ul className={burger ? 'active' : ''}>
        {dataCategory.map((el, i) => {
          return (
            <li
              onClick={clickCategory}
              key={el.id}
              data-category={i}
              className={activeCategory === String(i) ? 'active' : ''}>
              {el.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
