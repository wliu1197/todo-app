import {useState} from 'react';
import AuthenticationMsg from './AuthenticationMsg';
import { useNavigate } from 'react-router-dom';
import { useSahreContext } from './Context/ShareContextProvider';


export default function Login(){
    const [userDetail,setUser] = useState({username: "", password: ""});
    const [showSuccess,setShowSuccess] = useState(false);
    const [showFailed,setShowFailed] = useState(false);

    // this use with route to redirect pages
    const navigate = useNavigate();
    const shareContext = useSahreContext();

    function handleUserName(event){
        //only update username using spread syntax ...userDetail
        setUser({...userDetail,username : event.target.value});
    //  setUser({username : event.target.value, password: userDetail.password});
    }
    function handlePwd(event){
        setUser({...userDetail,password: event.target.value});
    //  setUser({username : userDetail.username, password: event.target.value});
    }
    function handleLogin(){
        if("wen" === userDetail.username && "comein22" === userDetail.password){
            setShowSuccess(true);
            setShowFailed(false);
            shareContext.setLoginUser(userDetail.username);

            // redirect to welcome page
            // pass a url param
//            navigate('/welcome/'+userDetail.username);
            // or
            navigate(`/welcome/${userDetail.username}`);
        }else{
            setShowSuccess(false);
            setShowFailed(true);
        }
        
    }
    return(
        <div className="Login">
            <div className="LoginForm">
                <AuthenticationMsg showSuccess={showSuccess} showFailed={showFailed} />

                {/* conditionally way of doing this, use boolean directly but this won't be reusable */}
                {showSuccess && <div>Authentication Success</div>}
                {showFailed  && <div>Authentication Failed</div>}

                <br/>
                <div>
                    <label>User name:</label>
                    <input type="text" name="username" value={userDetail.username} onChange={handleUserName}/>
                </div>
                <br/>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={userDetail.password} onChange={handlePwd}/>
                </div>
                <br/>
                <div>
                   <button type="button" name="login" onClick={handleLogin} > Login </button>
                </div>
            </div>
        </div>
    )
}