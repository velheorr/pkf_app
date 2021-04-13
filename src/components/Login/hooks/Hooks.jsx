import React, {useEffect, useState} from 'react';

const Hooks = () =>{
    let [number, setNumber] = useState([1,2,3]);
    const addNumber = ()=> {
        const randomNumber = Math.round(Math.random()*10);
        const newNumber = [...number, randomNumber]
        setNumber(newNumber)
    }

    let [hide, toggleHide] = useState([true])
    const toggle = ()=> {toggleHide(!hide)}

    const [count, setCount] = useState(0);
    useEffect(()=> {
        /*console.log('data have been changed')*/
    }, [number, count])




    return (
        <div>
            {
                hide &&
                <ul>
                    {number.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            }
            <button onClick={addNumber}>Add number</button>
            <button onClick={toggle}>Show / Hide list</button>

            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
            <button onClick={()=> setCount(0)}>Reset</button>

        </div>
    )
}

export default Hooks;