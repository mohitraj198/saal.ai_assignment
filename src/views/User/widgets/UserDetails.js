import React from 'react'
import moment from 'moment'

const UserDetails = ({ user }) => {
    // User's Details
    const {
        name: { title, first, last },
        picture: { large },
        email,
        gender,
        location: {
            street: { number, name },
            city,
            state,
            country,
            postcode
        },
        dob: { date },
        phone
    } = user

    // Formatting Mobile Number(Remove hyphen)
    const formattedPhone = phone.replace(/-/g, "")
    // Formatting Date
    const formattedDate = moment(date).format("DD/MM/YYYY")

    return (
        <div className="user_details-container">
            <div className="user_details-left">
                <img src={large} alt="Profile" />
                <span className="user_details_user-name">{title}. {first} {last}</span>
                <span className="user_details_user-email">{email}</span>
            </div>

            <div className="user_details-right">
                <div className="row">
                    <span className="heading">Gender</span>
                    <span className="detail">{gender}</span>
                </div>
                <div className="row">
                    <span className="heading">Address</span>
                    <span className="detail">{number} {name}, {city}, {state}, {country}</span>
                </div>
                <div className="row">
                    <span className="heading">Post Code</span>
                    <span className="detail">{postcode}</span>
                </div>
                <div className="row">
                    <span className="heading">DOB</span>
                    <span className="detail">
                        {formattedDate}
                    </span>
                </div>
                <div className="row">
                    <span className="heading">Phone</span>
                    <span className="detail">{formattedPhone}</span>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
