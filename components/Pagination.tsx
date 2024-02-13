type DataProps = {
    items: number,
    pageSize: number,
    currentPage: number, 
    onPageChange: Function
}

const Pagination = ({items, pageSize,currentPage, onPageChange}: DataProps) => {
    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({length: pagesCount}, (_,i)=> i + 1);
  return (
    <div className="flex items-center gap-4 w-full">
        <ul className="flex list-none w-full items-center justify-center">
            {pages.map((page)=> (
                <li key={page}>
                    <button onClick={()=> onPageChange(page)} className={`${page === currentPage ? 'bg-gray-900 text-white' : 'text-gray-900 '} relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`} >
                        {page}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination