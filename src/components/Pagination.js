import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import queryString from 'query-string';

const Pagination = ({ currentPage, setCurrentPage }) => {
    const history = useHistory()
    const location = history.location
    const query = queryString.parse(location.search);
    const page = Number(query.page)

    const [initialPageIndex, setInitialPageIndex] = useState([1, 2, 3, 4, 5])

    useEffect(() => {
        const pageIndex = []
        for (let i = page; i < page + 5; i++) {
            pageIndex.push(i)
        }
        setInitialPageIndex(pageIndex)
    }, [])

    const setPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

            if (currentPage === initialPageIndex[1] && initialPageIndex[0] !== 1) {
                const newPageList = initialPageIndex.map(val => val - 1)
                setInitialPageIndex(newPageList)
            }


            history.push("?page=" + (currentPage - 1))
        }
    }

    const setNextPage = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage === initialPageIndex[initialPageIndex.length - 2]) {
            const newPageList = initialPageIndex.map(val => val + 1)
            setInitialPageIndex(newPageList)
        }

        history.push("?page=" + (currentPage + 1))
    }

    const setPageNumber = (val) => {
        if (currentPage !== val) {
            setCurrentPage(val)

            if (initialPageIndex.indexOf(val) > 3) {
                const newPageList = initialPageIndex.map(val => val + 1)
                setInitialPageIndex(newPageList)
            } else if (initialPageIndex.indexOf(val) < 1 && initialPageIndex[0] !== 1) {
                const newPageList = initialPageIndex.map(val => val - 1)
                setInitialPageIndex(newPageList)
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
                    initialPageIndex.map(val => {
                        return (
                            <li
                                className={currentPage === val ? "active" : ""}
                                onClick={() => setPageNumber(val)} key={val}
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
