import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, active, page,setPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

    // function when click on next button
    const goNext = () => {
      if (page !== pageNumbers[pageNumbers.length - 1]) {
        setPage(page + 1);
      
      }
    };

  return (
          <nav className="nt-pagination w__100 tc paginate_ajax">
            <ul className="pagination-page page-numbers">
              {pageNumbers.map((page,index) =>
              {
              return (
                <li
                >
                 <a
                    key={index}
                    value={page}
                    id={page}
                    aria-controls="datatable"
                    data-dt-idx="1"
                    tabIndex="0"
                    className={`${active === page ? "active" : ""
                    } page-numbers`}
                    onClick={(e) => paginate(e)}
                  >
                    {page}
                  </a>
                </li>
              )})}
              <li><a href="#" className="next page-numbers" onClick={goNext} >Next</a></li>
            </ul>
          </nav>
         );
};

export default Pagination;
