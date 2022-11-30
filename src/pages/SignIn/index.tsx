import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react'

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase'

import './style.scss'



export function SignIn(){

    const [user, setUser] = useState<User>({} as User );

    function clickUserSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="container">

            <div className='user'>
                { user.photoURL && <img src={user.photoURL} alt="foto do usuário"/> }
                
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Autenticação com o Google</h1>

            <span>
                Utilizando autenticação social, por exemplo, autencicação com a Google você <br/>
                facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button onClick={clickUserSignIn} type="button" className="Button"> <GoogleLogo/> Entrar com o google</button>
        </div>
    )
}