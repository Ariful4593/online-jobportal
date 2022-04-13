import React from 'react'

export default function SearchFeild({ search, setSearch }) {
    return (
        <div className="search-area row">
            <div className="col-12 search-block">
                <input className="w-75 form-control" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search category" />
            </div>
        </div>
    )
}
