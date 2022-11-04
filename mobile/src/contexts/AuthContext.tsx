import { createContext } from "react";
import { ReactNode,useState,useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import {api} from '../services/api';

WebBrowser.maybeCompleteAuthSession();

interface UserProps{
    name:string;
    avatarUrl:string;
}

export interface AuthContextDataProps{
    user:UserProps;
    isUserLoading:boolean;
    signIn:()=> Promise<void>;
}

interface AuthProviderProps{
    children:ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}){

    const [user,setUser] = useState<UserProps>({} as UserProps);
    const [isUserLoading,setUserLoading] = useState(false);

    const [request,response,promptAsync] = Google.useAuthRequest({
        clientId:'1014717412669-0t7fd2426qp8bgsioj61efce247pmui8.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['profile', 'email']
    });

    async function signIn(){
        try{
            setUserLoading(true);
            await promptAsync();
        }catch(error){
            console.log(error);
            throw error;
        }finally{
            setUserLoading(false);
        }
    }

    async function signInWithGoogle(access_token:string) {
        try{
            setUserLoading(false);
            const tokenResponse = await api.post('/users',{access_token});
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

            const userInfoResponse = await api.get('/me');
            setUser(userInfoResponse.data.user)

        }catch(error){
            console.log(error);
            throw error;
        }finally{
            setUserLoading(false);
        }
    }

   useEffect(()=>{
        if(response?.type==='success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken)
            
        }
   },[response])



    return(
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}