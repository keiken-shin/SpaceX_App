import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number,
            mission_name,
            launch_year,
            launch_date_local,
            launch_success,
            rocket{
                rocket_id,
                rocket_name,
                rocket_type
            }
        }
    }
`;

export const Launch = (props) => {
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number)

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number }
    });

    if(loading) return <p>Loading...</p>;
    if(error) console.log(error);

    
    const { 
        mission_name, 
        launch_year,
        launch_date_local, 
        launch_success, 
        rocket: {
            rocket_id, 
            rocket_name, 
            rocket_type
        } 
    } = data.launch;

    return (
        
        <div className="container">
            <div className="launch-header">
                <h1>Mission: {mission_name}</h1>
                <Link to="/" className="back-button"><i class="fas fa-long-arrow-alt-left"></i>go back</Link>
            </div>

            <div className="group-1">
                <h4 className="group-heading">Launch Details</h4>
                <ul className="group-list">
                    <li>
                        <span>Flight Number</span>
                        <span>{flight_number}</span>
                    </li>
                    <li>
                        <span>Launch Year</span> 
                        <span>{launch_year}</span>
                    </li>
                    <li>
                        <span>Launch Date</span> 
                        <span><Moment format="MMMM Do">{launch_date_local}</Moment></span>
                    </li>
                    <li>
                        <span>Successfull</span> 
                        <span className={launch_success ? "text-success": "text-failure"}>{launch_success ? 'Yes' : 'No'}</span>
                    </li>
                </ul>
            </div>

            <div className="group-2">
                <h4 className="group-heading">Rocket Details</h4>
                <ul className="group-list">
                    <li>
                        <span>ID</span>
                        <span>{rocket_id}</span>
                    </li>
                    <li>
                        <span>Name</span>
                        <span>{rocket_name}</span>
                    </li>
                    <li>
                        <span>Type</span>
                        <span>{rocket_type}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
