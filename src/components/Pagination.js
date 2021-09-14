import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import queryString from 'query-string';

const Pagination = ({ currentPage, setCurrentPage }) => {
    const history = useHistory()
    const location = history.location
    const query = queryString.parse(location.search);
    const page = Number(query.page)

    const [initialPageIndies, setInitialPageIndies] = useState([1, 2, 3, 4, 5])
    const [pageIndies, setPageIndies] = useState([])

    useEffect(() => {
        const pageIndex = []
        for (let i = page; i < page + 5; i++) {
            pageIndex.push(i)
        }
        setPageIndies(pageIndex)
    }, [])

    useEffect(() => {
        if (pageIndies.length) {
            setInitialPageIndies(pageIndies)
        }
    }, [pageIndies])

    // Previous Page Button Method
    const setPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

            if (initialPageIndies[0] !== 1) {
                const newPageList = initialPageIndies.map(val => val - 1)
                setInitialPageIndies(newPageList)
            }

            history.push("?page=" + (currentPage - 1))
        }
    }

    // Next Page Button Method
    const setNextPage = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage === initialPageIndies[initialPageIndies.length - 2]) {
            const newPageList = initialPageIndies.map(val => val + 1)
            setInitialPageIndies(newPageList)
        }

        history.push("?page=" + (currentPage + 1))
    }

    // Updating Page Number List in Pagination
    const setPageNumber = (val) => {
        if (currentPage !== val) {
            setCurrentPage(val)

            if (initialPageIndies.indexOf(val) > 3) {
                const newPageList = initialPageIndies.map(val => val + 1)
                setInitialPageIndies(newPageList)
            } else if (initialPageIndies.indexOf(val) < 1 && initialPageIndies[0] !== 1) {
                const newPageList = initialPageIndies.map(val => val - 1)
                setInitialPageIndies(newPageList)
            }

            history.push("?page=" + val)
        }
    }

    return (
        <div className="pagination-container">
            <button onClick={setPreviousPage}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <ul>
                {
                    initialPageIndies.map((val, index) => {
                        return (
                            <li
                                className={currentPage === val ? "active" : ""}
                                onClick={() => setPageNumber(val)}
                                key={index}
                            >
                                {val}
                            </li>)
                    })
                }
            </ul>
            <button onClick={setNextPage}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Pagination
