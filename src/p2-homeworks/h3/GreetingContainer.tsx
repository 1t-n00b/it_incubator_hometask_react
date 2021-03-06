import React, {useState, ChangeEvent} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let name = e.currentTarget.value;

        // if(name.match(letters))
        // {
        //     setName(name);
        //     setError("")
        // }
        // else {
        //     setError(name)
        //     setName(name)
        //  //     alert('В тексте есть числа')
        // }
        if (correctName(name)) {
            setName(name);
            setError("")
        } else {
            setError(name)
            setName(name)
        }

    }
    let SOME_BOOLEAN = correctName(name);

    function correctName(name: string) {
        const letters = /^[A-Za-zА-Яа-я\-]+$/;
        // return name.match(letters)
        return letters.test(name)
    }

    const addUser = () => {
        //  alert(`Hello ${name} !`) // need to fix
        // addUserCallback(name)
        if (correctName(name)) {
            addUserCallback(name)
            alert(`Hello ${name} !`)
            setName("")
        }

    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            SOME_BOOLEAN={SOME_BOOLEAN}
        />
    )
}

export default GreetingContainer
