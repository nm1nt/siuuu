import React, { useState } from "react";
import { db, ROOM_CHAT_COLLECTION } from "../../../../firebase/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const InputAndSend = () => {


    const chatRef = collection(db, ROOM_CHAT_COLLECTION);


  const [chatText, setChatText] = useState("");

       const handleAddChat = async (e) => {
         e.preventDefault();
            if (chatText.trim() === "") return;
            try {
                const contentSendToFirebase = {
                  user_id: 1,
                  content: chatText,
                  createdAt: serverTimestamp(),
                  name : 'Admin'
                };

                await addDoc(chatRef, contentSendToFirebase);
                setChatText('')
            } catch (error) {
                console.log(error)
            }

       };





  return (
    <div className="h-14 flex-1 flex justify-center absolute bottom-24 left-0 right-0 px-16">
      <div className="flex flex-row w-3/5 justify-between items-center">
        <input
          type="text"
          value={chatText}
          placeholder="Type your message here"
          onChange={(e) => setChatText(e.target.value)}
          className="flex-1 h-14 rounded-l-lg border-none outline-none px-4 bg-slate-300 text-black text-lg"
        />
        <div 
            onClick={(e) => handleAddChat(e)}
        className="bg-pink-500 w-16 h-14 flex justify-center items-center rounded-r-lg active:bg-pink-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 animate-animate-bounce "
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputAndSend;
