import React, { useMemo } from "react";

const ChatItem = ({ content, createdAt, name, user_id }) => {
  const timer = new Date(createdAt?.seconds * 1000).toLocaleTimeString("en-US");

  const isMe = user_id === 1 ? true : false;



  const randomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-indigo-500",
      "bg-gray-500",
      "bg-red-600",
      "bg-blue-600",
      "bg-green-600",
      "bg-yellow-600",
      "bg-pink-600",
      "bg-purple-600",
      "bg-indigo-600",
      "bg-gray-600",
    ];
    const randomIndex = Math.trunc(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const color = useMemo(() => randomColor(), []);

  return (
    <div>
      <div className={`chat   ${isMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          {!isMe && (
            <div className={`w-10 h-10 rounded-full ${color}`}>
              <div className="flex flex-1 w-full h-full justify-center items-center text-white">
                {name[0]}
              </div>
            </div>
          )}
        </div>
        {!isMe && (
          <div className="chat-header">
            {name}
            <time className="text-xs opacity-50 ml-3">{timer}</time>
          </div>
        )}
        <div
          className={`${
            isMe ? "chat-bubble" : " chat-bubble chat-bubble-secondary"
          }`}
        >
          {content}
        </div>
        {isMe && (
          <time className="text-[10px] opacity-50 mt-2">
            {" "}
            Delivered at: {timer}
          </time>
        )}
      </div>
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://images.hdqwalls.com/wallpapers/trunks-dragon-ball-super-hd.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
    </div>
  );
};

export default ChatItem;
