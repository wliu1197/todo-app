import { useParams,useNavigate, Link } from 'react-router-dom';
import ListTodo from './ListTodo';

import { useSahreContext } from './Context/ShareContextProvider';
import axios from 'axios';

export default function Welcome(){
    const urlParams = useParams();
    const navigate = useNavigate();
    const redirectLink = `/listTodo/${urlParams.username}`;

    //use share context here
    const shareContext = useSahreContext();
    console.log(shareContext.shareObj.loginUser);

    function goListTodo(){
        navigate(redirectLink);
    }

    function callHelloWorld(shareObj){
 
        axios.get('http://localhost:8081/test/hello-world', 
            {
                auth: {
                username: shareObj.basicAuthUser,
                password: shareObj.basicAuthPwd
                }
            }
        )
            .then((response) => handelSuccessResponse(response))
            .catch((response) => handlerErrorResponse(response))
            .finally(()=> console.log('clean up'));
    }
    
    function handelSuccessResponse(response){
        console.log(response);
    }
    
    function handlerErrorResponse(response){
        console.log(response);
    }

    return(
        <div className='container'>
            <h1>Welcome to TO-DO App {shareContext.shareObj.loginUser}!</h1>
            <div className='listTodo'>
                {/* slow: or redirect from a link  this html tag will re-load whole page which is slow */}
                <a href={redirectLink}>View todo list</a><br/>
                
                {/* fast: use of navigate hook in function redirect to list todo page won't re-load the page */}
                <button onClick={goListTodo}>View todo list</button> <br/>

                {/* fast: use of Link hook won't re-load the page */}
                <Link to={redirectLink}>View todo list Link</Link><br/>
                {/* display todo list on welcome page directly */}
                
                <ListTodo username={urlParams.username} /><br/>

                <button className='callRestApi' onClick={() => callHelloWorld(shareContext.shareObj)}>Call hello world rest api</button>
               
            </div>
        </div>

    )
}

