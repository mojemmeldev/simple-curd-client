

import React from 'react';

const DynamicUserDtailsPage = async ({params}) => {
    const {slug}= await params
    const res = await fetch (`http://localhost:8000/users/${slug}`)
    const user = await res.json()
    return (
        <div>
            <h2>user details: {slug}</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default DynamicUserDtailsPage;