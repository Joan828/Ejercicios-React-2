import  {useState} from 'react'

const Counter = ({initialNumber, incrementNumber}) => {
    const[count, setCount] = useState(initialNumber)

    const increment = () =>{
        setCount(count+incrementNumber)
    }
    const decrement = () =>{
        setCount(count-incrementNumber)
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