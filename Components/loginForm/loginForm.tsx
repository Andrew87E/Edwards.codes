import  React, { useState } from 'react'

export const LoginForm: React.FC = () => {
    const [showModal, setShowModal] = useState(true);
    const [showModalBtn, setModalBtn] = useState(true)

    const handleLogin = () => {
        setShowModal(current => !current)
    }

    const closeModal = () => {
        setShowModal(current => !current)
    }

    return(
        <>
        {showModal ? (                   
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative rounded-3xl bg-gray-900">
                        <button onClick={closeModal} className="absolute top-3 right-2.5 text-gray-100 bg-transparent hover:text-lime-500 rounded-3xl text-sm p-1.5 ml-auto inline-flex items-center" >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-white dark:text-white">Sign in to our platform</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 ">Your email</label>
                                    <input type="email" name="email" id="email" className="border bg-transparent border-gray-300 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 " placeholder="name@company.com" required />
                                    </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border-gray-300 border bg-transparent text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 placeholder-white text-white" required />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 bg-black" required />
                                            </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-100">Remember me</label>
                                    </div>
                                    <a href="#" className="text-sm text-lime-500 hover:underline">Lost Password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-transparent text-lime-500 hover:text-white border border-white hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500">
                                    Not registered?<a href="/createAccount" className="text-lime-500 hover:underline">{' '}Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>) : null}

            {showModalBtn ? (
                            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal"
                            onClick={handleLogin}
                            >
                            Toggle modal
                        </button>
            ) : null}
            </> 

    )
}

