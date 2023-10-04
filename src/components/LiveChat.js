import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { FaTelegramPlane } from "react-icons/fa";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messageList = useSelector((store) => store.chat.messages);
 const [liveMessage,setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        }));
    }, 1000);
    return ()=>clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] p-2 border border-gray-300  overflow-y-scroll flex-col-reverse">
        {messageList.map((data, index) => (
          <ChatMessage key={index} name={data.name} message={data.message} />
        ))}
      </div>
      <form className="w-full p-2 border border-gray-300" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Manisha Bhaik",
            message: liveMessage,
          })
        );
            setLiveMessage("")
        }}>
        <div className="flex">
          <input
            type="text"
            value={liveMessage}
            className="w-80 border border-b px-2"
            placeholder="Chat..."
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="mx-2 p-2 rounded-md float-right bg-gray-300">
            <FaTelegramPlane/>
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
