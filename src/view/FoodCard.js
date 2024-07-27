import React from 'react'

function FoodCard(props) {
    return (
        <div className="food-card">
            <div className="img">
                <img src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="img" />
            </div>
            <h3>Name: {props?.name}</h3>
            <h3>Rate: {props?.rating}</h3>
        </div>
    )
}

export default FoodCard