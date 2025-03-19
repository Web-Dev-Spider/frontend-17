import React, { useEffect, useState } from 'react'

function Welcome() {
    const [welcomeMessage, setWelcomeMessage] = useState("")

    // const capitalize = (sentence) => {
    //     return sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    // }
    useEffect(() => {
        console.log('Use effect is working now.. at welcome page')
        const token = localStorage.getItem('token')
        console.log(token)
        setWelcomeMessage("Hello")
        // if (userName) {
        //     setWelcomeMessage(`${capitalize(userName)},`)
        // }

        // console.log('username received in the welcome page from the cookie', userName)
    }, [welcomeMessage])
    console.log("Hello I am in the welcome page")
    return (
        <div className='container items-start mx-auto md:ml-5 py-0 md:mt-6'>
            <h1 className='text-4xl font-light text-amber-900'>Welcome <span className='pr-2 font-semibold'>asdfsdf</span></h1>
            <h3 className='text-6xl mt-5 font-light'>See the wide varieties of fakes, that you won't find anywhere else in this world...</h3>
            <h4 className='text-4xl font-bold mt-8 text-slate-700 text-center'>TRUELY FAKE... THAT YOU NEVER CAN'T IDENTIFY</h4>
        </div>
    )
}

export default Welcome
