import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { useFirebaseStore } from "../../store/UseFirebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import VerticalCarousel from "../../components/carousel/verticalCarousel/VerticalCarousel";
import AddCollectionBtn from "../../components/button/AddCollectionBtn";
import CustomModal from "../../components/modal/CustomModal";

import { useControlModal } from "../../store/useControlModal";
import Lesson4 from "../../lesson/Lesson4";
import { Link } from "react-router-dom";

// Mô tả các hàm trong firebase/fireStore
// 1, collection: truy suất đến collection name được tạo trên firestore
// 2, getDocs: lấy dữ liệu từ collection dựa theo name trên firestore
// 3, addDoc: thêm dữ liệu vào collection dựa theo name trên firestore
// 4, deleteDoc: xóa dữ liệu từ collection dựa theo name trên firestore
// 5, doc: truy suất đến document name được tạo trên firestore
// 6, deleteField: xóa field trong document dựa theo name trên firestore
// 7, updateDoc: cập nhật dữ liệu trong document dựa theo name trên firestore
// 8, onSnapshot: là hàm cập nhật dữ liệu realtime ( tránh dùng vì nó sẽ truy suất dữ liệu liên tục => máy yếu sẽ gây lag, với plan free thì sẽ hết lượt truy cập miễn phí : không dùng trong khoá này)

const Home = () => {
  // giá trị khởi tạo cúa state là tất cả các kiểu dữ liệu mà JS có thể có
  const [count, setCount] = useState(60);
  const [inputVal, setInputVal] = useState("");
  const [isDead, setIsDead] = useState(true); // boolean

  const changeStatus = () => {
    setIsDead(!isDead);
    // dead dang la true !dead = false
    // dead la false !dead = true
  };

  const { dataStore, setDataStore, isLoading, setIsLoading } =
    useFirebaseStore();

  const { setModalVisible, modalVisible } = useControlModal();

  // các bước lấy data từ firestore
  // 1, truy suất đến collection name được tạo trên firestore
  const songRef = collection(db, "songs");

  // 2,viet ham de lấy dữ liệu từ collection dựa theo name trên firestore
  // voi ham getDocs nhan gia tri truyen vao la bien Ref duoc tao tu buoc 1
  const getFirebaseData = async () => {
    setIsLoading(true);
    const res = await getDocs(songRef);
    //3, như quan sát ta thây res trả về 1 trường docs có số phần từ === số document trong collection
    // nhiệm vụ : cầm docs này map để lấy data của từng phần từ 1 trong docs
    const collectionData = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDataStore(collectionData);
    setIsLoading(false);
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  //4, map dataStore để render ra giao diện

  console.log(modalVisible, "modalVisible")


  const handleAddCollection = async (data) => {
      await addDoc(songRef, data)
      setModalVisible(!modalVisible)
      getFirebaseData()
   }

   const handleUpdateDoc = async  (id,data) => {
    await updateDoc(doc(db, "songs", id), data);
    setModalVisible(!modalVisible);
    getFirebaseData()
   }


   const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "songs", id));
    getFirebaseData();
  };



  return (
    <div className="h-full w-full bg-blue-200 flex flex-1 justify-center items-center">
      {/* <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
        <h1 className="text-[48px] text-black">{count}</h1>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs"
          value={inputVal}  // value dang nhan gia tri la inputVal dc khoi tao tu useState ben tren
          onChange={(e) => setInputVal(e.target.value)}  // e la event khi nhan vao ban phim, e.target.value la gia tri ma nguoi dung nhap vao  tu ban phim
          // sau khi co e.target.value thi setInputVal(e.target.value) la cap nhat lai gia tri cua inputVal === e.target.value
          />
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button
        // dat dau + truoc 1 string de bien no thanh dang number
        // khi string k phai la chu ma la so (a,b,c, z, ) => khong the dang number
        // "4" => +"4" = 4
            onClick={()=> setCount((prev) => prev - +inputVal)} 
            className="btn ">Giảm đi input</button>
          <button
          // prev la previous value cua state
            onClick={()=> setCount((prev) => prev -1)} 
            className="btn ">Giảm đi 1</button>
          <button
            onClick={() => setCount(60)} 
            className="btn">Reset</button>
          <button 
            onClick={() => 
              setCount(
              (prev) => prev +1
              )
            }
            className="btn">Tăng thêm 1</button>
            <button
            onClick={()=> setCount((prev) => prev + +inputVal)} 
            className="btn ">Tăng thêm input</button>
        </div>
      </div> */}
      {/* <div className="flex items-end flex-col">
        <VerticalCarousel deleteDocument={deleteDocument} />
        <AddCollectionBtn
          title="Add New Collection"
          reStyle="mt-4"
          onClick={() => setModalVisible(true)}
        />
        {modalVisible && (
          <CustomModal
            addCollection={handleAddCollection}
            updateCollection={handleUpdateDoc}
          />
        )}
      </div> */}

      {/* <div>
        <Lesson4 />
      </div> */}

      <div
        className="
      px-3 py-2 text-white rounded-md cursor-pointer absolute right-10 bottom-24 animate-bounce
        bg-gradient-to-r
        from-green-400
        to-blue-500
        hover:from-pink-500
        hover:to-yellow-500
        "
      >
        <Link className="border-none hover:border-none" to="/chat">
          Need Support
        </Link>
      </div>
    </div>
  );
};

export default Home;
