import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import queryString from 'query-string';
import Pagination from '../../components/Pagination'
import Searchbar from '../../components/Searchbar'
import ListItem from './widgets/ListItem'
import { getUsers } from "../../services/user"
import ListHeader from './widgets/ListHeader';
import Loader from "../../components/Loader"

const List = () => {
    const history = useHistory()
    const location = history.location
    const query = queryString.parse(location.search);
    const page = Number(query.page)

    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(page ? page : 1)
    const [loading, setLoading] = useState(true)
    const [searchUsers, setSearchUsers] = useState([])
    const [searchUser, setSearchUser] = useState('')
    const listHeadings = ["", "Name", "Email", "DOB", "Address", "Phone"]

    const fetchUserData = async () => {
        setLoading(true)
        setSearchUser('')
        const userData = await getUsers(currentPage)

        if (userData) {
            setUsers(userData)
            setSearchUsers(userData)
        }

        setLoading(false)
    }

    useEffect(() => {
        history.push(`?page=${currentPage}`);
        fetchUserData()
        // eslint-disable-next-line
    }, [currentPage])

    return (
        <div className="users-container">

            <Searchbar
                users={users}
                setSearchUsers={setSearchUsers}
                searchUser={searchUser}
                setSearchUser={setSearchUser}
            />

            <div className="users-list">
                <ListHeader listHeadings={listHeadings} />
                <div className="user-list-container">
                    <Loader loading={loading}>
                        {
                            !searchUsers.length
                                ? <h2>No Search Results Found</h2>
                                : searchUsers.map((user) => (
                                    <ListItem
                                        key={user.name.first + user.name.last}
                                        user={user}
                                    />
                                ))
                        }
                    </Loader>
                </div>
            </div>

            <div className="pagination">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default List