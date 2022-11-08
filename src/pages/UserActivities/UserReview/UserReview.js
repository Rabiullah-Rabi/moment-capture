import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const UserReview = () => {
    const { user } = useContext(AuthContext);
    const { uid, email, diplayName, photoURL } = user;
    const [reviews, setReviews] = useState();
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsbyuser/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
          })
          .catch((error) => console.error(error));
      }, []);
    return (
        <div>
            <h1>list of reviews</h1>
        </div>
    );
};

export default UserReview;