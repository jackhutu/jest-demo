import React from 'react'

interface MessageProps {
  msg: string
}

const Message = (props: MessageProps)=>{
  return (<div>{props.msg}</div>)
}
export default Message