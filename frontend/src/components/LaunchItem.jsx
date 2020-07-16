import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const LaunchItem = (props) => {
    const { launch: { flight_number, mission_name, launch_date_local, launch_success} } = props;
    return (
        <div className="card">
            <div className="card__upper">
                <h4 className="card-title">Mission: <span className={launch_success ? "text-success" : "text-failure"}>{ mission_name }</span></h4>
                <p className="card-tag">Date: <Moment format="MMMM Do, YYYY">{ launch_date_local }</Moment></p>
                <p className="card-tag">Time: <Moment format="HH:mm a">{ launch_date_local }</Moment></p>
            </div>

            <Link to={`/launch/${flight_number}`} className="card-button">Launch Details <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
    )
}
