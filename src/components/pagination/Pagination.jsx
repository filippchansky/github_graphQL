import "./pagination.css";

const Pagination = ({
  repositoryPerPage,
  totalRepository,
  paginate,
  paginationLink,
  setPaginationLink,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepository / repositoryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination container">
        {pageNumbers.map((num) => (
          <li
            className="pagination-item"
            key={num}
            onClick={() => paginate(num)}
          >
            <p className="pagination-link">{num}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
