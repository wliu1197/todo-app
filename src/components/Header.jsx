import { Link } from 'react-router-dom';
import { useSahreContext } from './Context/ShareContextProvider';

export default function Header(){
    //loginUser was saved in shareContext in Login.jsx
    const shareContext = useSahreContext();
    const welcomeLink = '/welcome/'+ shareContext.shareObj.loginUser;
    
    const isAuthenticated = shareContext.isAuthenticated();


    return(
            <div className="container">
                <div className='row'>
                    <nav className='navbar navbar-expand-lg'>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    {isAuthenticated && <Link className='nav-link' to={welcomeLink}>Home</Link>}
                                </li>
                            </ul>
                        </div>
                            
                        <ul className='navbar-nav'>

                            <li className='nav-item'>
                                {!isAuthenticated && <Link className='nav-link' to='/login' >Login</Link>}
                            </li>
                            <li className='nav-item'>
                                {isAuthenticated && <Link className='nav-link' to='/logout' onClick={()=> shareContext.setLogout()}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>  
                </div>
            </div>
    )
}