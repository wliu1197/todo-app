import Login from "./Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import ListTodo from "./ListTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import './TodoApp.css';
import ShareContextProvider from "./Context/ShareContextProvider";
import { useSahreContext } from "./Context/ShareContextProvider";


function AuthenticatedCheck({children}){

    const shareContext = useSahreContext();
    if(shareContext.isAuthenticated()){
        return children;
    }
    return <Navigate to='/login' />;
}

export default function TodoApp(){
    
    return(
        <>

            <div className="TodoApp">
                {/* create share context for it's child components */}
                <ShareContextProvider>
                    {/* using routs for mapping and redirect pages */}
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/login' element={<Login />} />

                            <Route path='/welcome' element={
                                <AuthenticatedCheck>
                                     <Welcome />
                                </AuthenticatedCheck>
                            } />
                            
                            <Route path='/welcome/:username' element={
                                <AuthenticatedCheck>
                                     <Welcome />
                                </AuthenticatedCheck>
                            } />
                            
                            <Route path='/listTodo/:username' element={
                                 <AuthenticatedCheck>
                                    <ListTodo />
                                </AuthenticatedCheck>
                            } />

                            <Route path='/logout' element={<Logout />} />
                            <Route path='*' element={<PageNotFound />} />

                        </Routes>
                        <Footer />
                    </BrowserRouter>
                    
                </ShareContextProvider>
            </div>
        </>
    )
}