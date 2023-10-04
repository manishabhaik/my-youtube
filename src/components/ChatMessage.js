import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center col-span-1 py-2">
      <img
        className="h-8 pr-2"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <span className="font-bold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage
