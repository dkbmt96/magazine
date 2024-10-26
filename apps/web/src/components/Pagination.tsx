import React from 'react';

const Pagination:React.FC<{currentPage: number, onPageChange(page:number): void}> = ({currentPage, onPageChange}) => {

  const totalPages = 3; // Define the total number of pages

  const handlePageChange = React.useCallback((page: number) => {
    onPageChange(page)
  }, []);

  return (
    <div className='text-center mt-4'>
      <button
        className='p-2 border bg-white font-bold'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {`<<`}
      </button>

      {/* Render numbered page buttons */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`py-2 px-4 border ${currentPage === page ? 'bg-red-700 text-white' : 'bg-white'}`}
          >
            {page}
          </button>
        );
      })}

      <button
        className='p-2 border bg-white font-bold'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {`>>`}
      </button>
    </div>
  );
};

export default Pagination;
