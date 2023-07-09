import React, {useMemo} from "react";


interface IChatItem {
  name: string;
  content: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  uid: string;
}

const randomColor = () => {
  const colors = [
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    // 600
    "bg-pink-600",
    "bg-purple-600",
    "bg-indigo-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-red-600",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};


const ChatItem = ({ name, content, createdAt, uid }: IChatItem) => {
  const timer = new Date(createdAt?.seconds * 1000).toLocaleTimeString();
  const user_id = localStorage.getItem("user_id");


  const isAnonymous = useMemo(() => {
    return !uid || uid === '0';
  }, [uid]);

  const isMe = useMemo(() => {
    return !isAnonymous && user_id === uid;
  }, [user_id, uid, isAnonymous]);

  const color = useMemo(() => randomColor(), []);

  return (
    <>
      <div className={`chat ${isMe ? "chat-end" : "chat-start"}`}>
        {!isMe && (
          <>
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center text-white chat chat-image ${color}`}
            >
              {(isAnonymous || !name) ? "A" : name[0]}
            </div>
            <div className="chat-header mb-1 font-medium text-slate-200">
              {isAnonymous ? "Anonymous" : name}
              <time className="text-xs opacity-50 ml-2 font-light">
                {timer}
              </time>
            </div>
          </>
        )}
        {isMe && (
          <div className="chat-footer opacity-50 text-[12px] mt-1">Delivered at: {timer}</div>
        )}
        <div className="chat-bubble bg-slate-100 text-slate-800">{content}</div>
      </div>
    </>
  );
};

export default ChatItem;
