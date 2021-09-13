import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Pagination = ({ currentPage, setCurrentPage }) => {
    const [pageList, setPageList] = useState([1, 2, 3, 4, 5])

    const setPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

            if (currentPage === pageList[1] && pageList[0] !== 1) {
                const newPageList = pageList.map(val => val - 1)
                setPageList(newPageList)
            }
        }
    }

    const setNextPage = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage === pageList[pageList.length - 2]) {
            const newPageList = pageList.map(val => val + 1)
            setPageList(newPageList)
        }
    }

    const setPageNumber = (val) => {
        if (currentPage !== val) {
            setCurrentPage(val)

            if (pageList.indexOf(val) > 3) {
                const newPageList = pageList.map(val => val + 1)
                setPageList(newPageList)
            } else if (pageList.indexOf(val) < 1 && pageList[0] !== 1) {
                const newPageList = pageList.map(val => val - 1)
                setPageList(newPageList)
            }
        }
    }

    return (
        <div className="pagination-container">
            <button onClick={setPreviousPage}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <ul>
                {
                    pageList.map(val => {
                        console.log(currentPage, val, "==========")
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
