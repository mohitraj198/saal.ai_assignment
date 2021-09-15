import React from 'react'

const ListHeader = ({ listHeadings }) => {
    return (

        <div className="list-header">
            {
                listHeadings.map(item => {
                    return <p key={item} className={`list-header-heading ${"list-header-heading" + item}`}>{item}</p>
                })
            }
        </div>
    )
}

export default ListHeader
