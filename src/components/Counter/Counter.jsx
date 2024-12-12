import  {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        Counter = {count}
        <button onClick={increment}>+</button>

    </div>
    
  )
}

export default Counter