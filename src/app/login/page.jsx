import React from 'react'

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#023e8a]">
      <div className="w-full p-6 m-auto bg-white rounded-4xl shadow-lg ring-2 ring-sky-400 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-sky-400">PSHPU GAME-CREATOR TEAM</h1>

        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-sky-400">Email</label>
            <input type="email"
              className="block w-full px-4 py-2 mt-2 text-sky-400 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring focus:ring-opacity-40"/>
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
              <input type="password"
                className="block w-full px-4 py-2 mt-2 text-sky-400 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
            </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#"
          className="font-medium text-purple-600 hover:underline">Sign up</a></p>
      </div>
    </div>
  )
}
