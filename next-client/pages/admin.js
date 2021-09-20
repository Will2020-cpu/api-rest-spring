import Head from 'next/head';

const Admin = () => {
    return (
        <>
            <div className="flex flex-row h-screen">
                <div className="flex flex-col justify-between items-center flex-none w-16 p-4 bg-gray-200">
                    <div className="flex flex-col space-y-4">
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
                    </div>
                </div>

                <div className="w-64 bg-gray-100 p-4 flex flex-none flex-col space-y-4">
                    <div className="flex flex-row justify-between items-center m-6">
                        <h1 className="font-semibold text-2xl" >Inbox</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-none h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="bg-red-200 h-64"></div>
                    <div className="bg-red-200 h-64"></div>

                </div>

                <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
                    <div className="flex flex-col w-1/5">
                        <div className="flex-none h-24 bg-red-200">top</div>
                        <div className="flex-auto overflow-y-auto">
                            <a className="block border-b">
                                <div className="border-l-2 border-blue-500 p-3 space-y-4">
                                    <div className="flex flex-row justify-between space-x-2 items-center">
                                        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        <strong className="flex-grow text-sm">Username</strong>
                                        <span>b</span>
                                    </div>

                                    <div className="flex flex-row items-center space-x-1">
                                        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                        <div className="flex-grow text-xs truncate">askjdhasdjkahsjdhasdkjasdlkas;ldkadsl;kas;dada;lkd;lasdakdkasdlk</div>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>
                    <div className="w-3/5 border-r border-l border-gray-400">center</div>
                    <div className="w-1/5 flex-auto bg-gray-200">right</div>
                </div>
            </div>
        </>
    )
}

export default Admin;
