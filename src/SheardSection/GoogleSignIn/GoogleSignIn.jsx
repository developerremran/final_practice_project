import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { googleNewUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleHandeler = () => {
        console.log('done');
        googleNewUser()
            .then((result) => {
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                   })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId)
                        navigate(from, { replace: true })


                    })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='text-center'>
            <button onClick={googleHandeler} className='btn btn-warning btn-sm'>Google</button>
        </div>
    );
};

export default GoogleSignIn;