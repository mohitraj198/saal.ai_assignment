import React from 'react'
import Moment from 'react-moment';

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

    return (
        <div className="user_details-container">
            <div className="user_details-left">
                <img src={large} alt="Profile" />
                <p className="user_details_user-name">{title}. {first} {last}</p>
                <p className="user_details_user-email">{email}</p>
            </div>

            <div className="user_details-right">
                <div className="row">
                    <p className="heading">Gender</p>
                    <p className="detail">{gender}</p>
                </div>
                <div className="row">
                    <p className="heading">Address</p>
                    <p className="detail">{number} {name}, {city}, {state}, {country}</p>
                </div>
                <div className="row">
                    <p className="heading">Post Code</p>
                    <p className="detail">{postcode}</p>
                </div>
                <div className="row">
                    <p className="heading">DOB</p>
                    <p className="detail">
                        <Moment format="DD/MM/YYYY">
                            {date}
                        </Moment>
                    </p>
                </div>
                <div className="row">
                    <p className="heading">Phone</p>
                    <p className="detail">{formattedPhone}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
