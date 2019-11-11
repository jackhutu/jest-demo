import React, {useState} from 'react'

const Count = ()=>{
  const [count, setCount] = useState(0)
  return (
    <div>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Count