import React from 'react'

//1st step createContext
//2nd step Provide a contextVal
//3rd consume the contextVal

const user = {name:'Madhav Ji',age:23}
const Usercontext = React.createContext(user)
const UserProvider = Usercontext.Provider
const UserConsumer = Usercontext.Consumer

export {Usercontext}
export {UserProvider, UserConsumer} // we're not using default