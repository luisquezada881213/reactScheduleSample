import React from 'react'

export default function bikes({bikes}) {

    return (
        <>
            {Boolean(bikes.length) || <p>No bikes avaiable!</p>}
            <ul>{bikes.map(e => <li key={e}>{`Bike ${e}`}</li>)}</ul>
        </>
    )
}
