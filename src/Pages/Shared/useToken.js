import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const useToken = (user) => {
    const [token, setToken] = useState('');
    const [authUser]=useAuthState(auth)
    useEffect( () =>{
        const email = user?.email;
        // console.log( "emia is ", email);
        const currentUser = {
            email: email
           
                       };
                       console.log("cuten",currentUser);
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                // console.log('data inside useToken', data);
                console.log("dataa",data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
            .catch(err=>{
                console.log(err);
            })
        }

    }, [user, authUser]);
    return [token];
};

export default useToken;