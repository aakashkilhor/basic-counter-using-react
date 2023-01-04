import { useState,useEffect } from "react"

const Counter = () => {
        const [count, setCount] = useState(1)
        useEffect(() => {console.log("Hello Hooks")}, [count])
        
  return (
    <>
    <h2>Counter - {count}</h2>
    <button onClick={() => setCount(0)}>Reset Counter</button>
    <button onClick={() => (setCount(count + 1))}>Increase Counter</button>
    <button onClick={() => {setCount(count - 1)}}>Decrease Counter</button>
    </>
    )}

function App() {
  return (
    <Counter/>
    );
}
export default App;
