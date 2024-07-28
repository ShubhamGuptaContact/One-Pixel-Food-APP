// fake cards for user interaction

import React from 'react'

function Shimmer() {
    const loadCards = [];
    for (let i = 0; i < 30; i++) {
        loadCards.push(<div key={i} className="load-card"></div>);
    }
    return (
        <div className='load-container'>
            {loadCards}
        </div>
    );
}

export default Shimmer