import React, {useState, useEffect} from 'react'

const CountAsync = ()=>{
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(1)
    }, 1000)
  }, [])
  return (
    <div>
      <span>{count}</span>
    </div>
  )
}

export default CountAsync