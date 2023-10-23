import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Pagination = ({onChangePage}) => {
  

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={4}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
