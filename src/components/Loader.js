import React from 'react'

/**
 * @componentName Loader
 * @description display loader while fetching data
 */

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
