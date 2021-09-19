import Head from 'next/head';
import React,{ useState } from 'react';


export default function Home() {

    /*Manejando el formulario*/
    const signinForm = async event =>{
        event.preventDefault();
        const res = await fetch(
            `https://localhost:8080/login?username=${event.target.name.value}&password=${event.target.password.value}"`
        )

    }

    return(
        <>
            <div className="flex items-center justify-center relative">
                <span className="absolute top-12 py-2 px-5 text-sm bg-red-500 rounded-sm text-white">
                    Inicio de sesion
                </span>
            
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
                            <form  className="space-y-4">
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="inputUsername" className="text-sm">Username</label>
                                    <input type="username" autoComplete="username" required id="inputUsername" placeholder="spiderman" className="border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" id="inputPassword" placeholder="******"  className="border p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"/>
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
