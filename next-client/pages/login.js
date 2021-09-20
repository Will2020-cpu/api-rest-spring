import Head from 'next/head';
import React,{ useState } from 'react';
import { useRouter } from 'next/router'


export default function Login() {
    const [show,setShow] = useState(false);
    const router = useRouter()


    /*Manejando el formulario*/
    const signinForm = async event =>{
        event.preventDefault();
        const res = await fetch(
            `http://localhost:8080/api/login?username=${event.target.username.value}&password=${event.target.password.value}`
        ).then(res =>{
            if(res.ok){
                return res.json();
            }else{
                setShow(true);
            }
        }).then(data=>{
           if(data){
                window.sessionStorage.setItem('token',data.access_token);
                window.sessionStorage.setItem('refresh',data.refresh_token);
                router.push("/")
           }
        }) 

    }

    return(
        <>
            <div className="flex items-center justify-center relative">
                {
                    show ?
                    <div className="absolute flex items-center space-x-2  top-12 py-2 px-5 text-sm bg-red-500 rounded-sm text-white">
                         <span>Inicio de sesion no valido</span>
                        <button onClick={()=> setShow(false)}>
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                         </button>
                    </div>:null
                }            
            
                <div className="w-max mx-auto h-screen flex items-center justify-center ">
                    {/* Header form  */}
                    <div className="border shadow-lg rounded-lg">
                        <div className="border-b py-2">
                            <div className="px-20">
                                <h4 className="text-xl text-center">Iniciar sesion</h4>
                            </div>
                        </div>
                        {/* Body form */}
                        <div className="flex items-center justify-center px-10 py-8">
                            <form onSubmit={signinForm} className="space-y-4">
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="inputUsername" className="text-sm">Username</label>
                                    <input name="username" type="name" autoComplete="username" required id="inputUsername" placeholder="spiderman" className="border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input name="password" type="password" id="inputPassword" placeholder="******"  className="border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"/>
                                </div>
                                <div className="w-full">
                                    <button type="submit" className="w-full p-2 text-white rounded-sm bg-black">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
