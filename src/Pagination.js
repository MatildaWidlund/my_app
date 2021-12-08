function Pagination ({ activePage, totalPages, setActivePage }) {
  
  return (
    <>
      <div className="Pagination">
        <button 
        disabled={activePage === 1} 
        onClick={() => setActivePage(1)} >
          ⇤ First page
        </button>
        <button 
        disabled={activePage === 1} 
        onClick={() => setActivePage(activePage - 1)} >
          ← Previous
        </button>
        <span>
          {activePage} of {totalPages}
        </span>
        <button 
        disabled={activePage === totalPages} 
        onClick={() => setActivePage(activePage + 1)} >
          Next →
        </button>
        <button 
        disabled={activePage === totalPages} 
        onClick={() => setActivePage(totalPages)} >
          Last page ⇥
        </button>
      </div>
    </>
  )
}
export default Pagination;