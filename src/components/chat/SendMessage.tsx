import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db, ROOM_CHAT_COLLECTION } from "../../../firebase/firebase.config";
import React from "react";;


const SendMessage = () => {
  const [value, setValue] = useState<string>("");



  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      await addDoc(collection(db, ROOM_CHAT_COLLECTION), {
        content: value,
        name: 'Hann',
        uid: '123',
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="fixed bottom-8 w-full">
      <form
        onSubmit={handleSendMessage}
        className="px-2 container mx-auto max-w-4xl flex"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-slate-100 rounded-r-none py-3 rounded-l-lg px-2 text-slate-900"
          type="text"
          placeholder="Type your message..."
        />
        <div
          onClick={handleSendMessage}
          className="w-auto bg-pink-600 text-white rounded-r-lg px-5 text-sm flex justify-center items-center cursor-pointer hover:bg-pink-700 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
