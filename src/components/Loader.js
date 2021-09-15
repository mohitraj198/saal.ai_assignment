import React from 'react'

const Loader = (props) => {
    const { loading } = props
    if (loading) {
        return <div className="loader"></div>
    }
    return (
        <>
            {props.children}
        </>
    )
}

export default Loader
