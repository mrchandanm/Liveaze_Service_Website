
import {useState,useEffect,createContext} from 'react'

const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    })
    useEffect(()=>{
        const data=localStorage.getItem('auth');
        if(data){
            const parsedData=JSON.parse(data);
            setAuth({
                ...auth,
                user:parsedData.user,
                token:parsedData.token
            })
        }
    },[])
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
    
};
//custom hook

export {AuthContext};
export {AuthProvider};
