import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { LaunchItem } from './LaunchItem';
import { MissionKey } from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number,
            mission_name,
            launch_date_local,
            launch_success,
        }
    }
`;

export const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if(loading) return <p>Loading...</p>;
    if(error) console.log(error);

    return (
        <>
            <h1 className="heading">All Launches</h1>
            <MissionKey />
            <section className="card-grid">
                {
                    data.launches.map(launch => (
                        <LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>
                    ))
                }
            </section>
        </>
    )
}
