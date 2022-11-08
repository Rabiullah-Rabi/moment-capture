import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { displayName } = user;
    return (
        <div className='container mx-auto py-14'> 
            <h1>Wellcome { displayName}</h1>
        </div>
    );
};

export default UserProfile;