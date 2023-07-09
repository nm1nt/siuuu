import React, { useEffect, useState, useRef } from "react";
import { db, ROOM_CHAT_COLLECTION } from "../../../firebase/firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import ChatItem from "./ChatItem";




type listMessages= {
  id: string 
  name: string;
  content: string;
  uid : string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}


const ChatBox = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [listMessages, setListMessages] = useState<listMessages[]>([]);

  const messagesEndRef = useRef();
  const messageRef = collection(db, ROOM_CHAT_COLLECTION);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(messageRef);
      const collectionData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      setListMessages(collectionData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
    // oder by createdAt
    const unsubscribe = onSnapshot(
      query(
        messageRef,
        orderBy("createdAt"),
        limit(100)
      ),
      (snapshot) => {
        const collectionData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setListMessages(collectionData);
      }
    );
    return unsubscribe

  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [listMessages]);

  return (
    <div className="pb-28 pt-10 containerWrap pl-4">
      {isLoading && (
        <div className="text-center text-3xl font-medium">Loading...</div>
      )}
      {listMessages?.map((message) => (
        <ChatItem key={message.id} {...message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
