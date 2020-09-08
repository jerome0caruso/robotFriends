import React from 'react';
import Card from './Card';

// const CardList = ({ robots }) => { another way with destructoring
const CardList = (props) => {
    // if (true) {
    //     throw new Error("oh No")
    // }
    return (
        <div className="container">
            {
                props.robots.map((user, i) => {
                    return (
                        <Card key={i} id={user.id} name={user.name} email={user.email} />
                    )
                })
            }
        </div>
    )
}

export default CardList;