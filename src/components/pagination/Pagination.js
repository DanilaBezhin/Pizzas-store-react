import styles from './pagination.module.scss';
import {
  setActivePagePaginate,
  setActivePagePaginateMinus,
  setActivePagePaginatePlus,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Paginate = () => {
  const countPaginate = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const activePagePaginate = useSelector((state) => state.filter.activePagePaginate);

  function onClickSetActivePagePaginate(event) {
    if (event.target.id === 'paginationMinusArrow') {
      if (activePagePaginate > 1) {
        dispatch(setActivePagePaginateMinus());
      }
    } else if (event.target.id === 'paginationPlusArrow') {
      if (activePagePaginate < 9) {
        dispatch(setActivePagePaginatePlus());
      }
    } else if (countPaginate.includes(Number(event.target.textContent))) {
      dispatch(setActivePagePaginate(event.target.textContent));
    }
  }

  return (
    <div onClick={onClickSetActivePagePaginate} id="corePagination" className={styles.root}>
      <div id="paginationMinusArrow" className={styles.minusArrow}>
        {' '}
        ❮{' '}
      </div>
      <div className={styles.allPaginateCount}>
        {countPaginate.map((el) => {
          return (
            <div
              key={'paginteElementKey-' + el}
              id={'paginteElement-' + el}
              className={
                activePagePaginate === String(el)
                  ? styles.paginateCountActive
                  : styles.paginateCount
              }>
              {el}
            </div>
          );
        })}
      </div>
      <div id="paginationPlusArrow" className={styles.plusArrow}>
        {' '}
        ❯{' '}
      </div>
    </div>
  );
};

export default Paginate;
