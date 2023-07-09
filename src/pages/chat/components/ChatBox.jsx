import React, {useState, useEffect, useRef} from 'react'
import ChatItem from './ChatItem'
import { db, ROOM_CHAT_COLLECTION } from '../../../../firebase/firebase.config';
import { collection, getDocs, onSnapshot , query, orderBy} from 'firebase/firestore';

// onSnapshot : hàm lấy data realtime từ firestore, nếu có sự thay đổi về data thì nó sẽ tự động cập nhật lại data mới

const ChatBox = () => {


    const [listChats, setListChats] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const chatRef = collection(db, ROOM_CHAT_COLLECTION);
      const positionOfMessage = useRef(null);

  const scrollToBottom = () => { 
    positionOfMessage.current?.scrollIntoView({ behavior: "smooth" });
  }

    const handleGetListChats = async () => {
        try {
              setIsLoading(true);
            const res = await getDocs(chatRef);
            const mapRes = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setListChats(mapRes)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
     }

     useEffect(() => {
            handleGetListChats()
            const continueGetListChats = onSnapshot(
                    query(chatRef, orderBy("createdAt") )
                , (item) => {
                const mapItem = item.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setListChats(mapItem)
             })
             return continueGetListChats;

        }, [])

    useEffect(
        () => {
            scrollToBottom()
        }, [listChats]
    )









  return (
    <div className="w-screen bg-red-100 h-screen flex items-center justify-center">
      <div className="w-3/5  bg-slate-800 h-full px-2 ">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center text-white flex-1">
            Loading ...
          </div>
        ) : (
          <div className="h-5/6 pt-4 overflow-auto">
            {listChats?.map((item, index) => {
              return <ChatItem key={index} {...item} />;
            })}
          </div>
        )}
      </div>
      <div ref={positionOfMessage} />
    </div>
  );
}

export default ChatBox