export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
      >
        Previous
      </button>
      
      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === page
                ? 'bg-green-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
      >
        Next
      </button>
    </div>
  );
} 