import React, {useState} from 'react';
import './Login.css';


function Login(){
    const [page, setPage] = useState(true);

    const createAccount = () =>{
        setPage(true);
    }
    const displayPage = () =>{
        setPage(!page);
    }
    return(
        <div className="Login">
        {page &&
            
                <div className="Login_Container">
                    <form className="Login_Form">
                        <h1>Sign-In</h1>
                        <input type="text" id="username" placeholder="Username"/>
                        <input type="password" id="password" placeholder="Password"/>

                        <button>
                            Login
                        </button>
                    </form>
                    <span onClick={displayPage}>Not a user? Create Account</span>
                </div>
        }
        {!page && 

                <div className="Login_CreateAcc_Container">
                    <form className="Login_CreateAcc_Form">
                        <h1>Create Account</h1>
                        <input type="text" id="firstName" placeholder="First Name"/>
                        <input type="text" id="lastName" placeholder="Last Name"/>
                        <input type="text" id="username" placeholder="Username"/>
                        <input type="password" id="password" placeholder="Password"/>
                        <input type="password" id="password" placeholder="Re-type Password"/>

                        <button onClick={createAccount}>
                            Submit
                        </button>
                    </form>
                    <span onClick={displayPage}>Already a user? Login</span>
                </div>
        }
        </div>
    );
}

export default Login;