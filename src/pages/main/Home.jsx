import React, { useEffect, useState } from "react";
import { FIREBASE_COLLECTION, db } from "../../../firebase/firebase.config";
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
  const songRef = collection(db, FIREBASE_COLLECTION);

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



  const handleAddCollection = async (data) => {
    await addDoc(songRef, data)
    setModalVisible(!modalVisible)
    getFirebaseData()
  }

  const handleUpdateDoc = async (id, data) => {
    await updateDoc(doc(db, "songs", id), data);
    setModalVisible(!modalVisible);
    getFirebaseData()
  }


  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "songs", id));
    getFirebaseData();
  };


  // console.log(dataStore)


  return (
    <div className="h-full w-full  flex flex-1 justify-center">
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <a href="#_" className="block">
                <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src={dataStore[0].image} />
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span>Featured</span>
                </div>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl "><a className="text-black" href="#_">{dataStore[0].place}</a><a href={'detail1'}></a></h1>
                <p className="pt-2 text-sm font-medium">by <a href="#_" className="mr-1 underline">John Doe</a> · <span className="mx-1">April 23rd, 2021</span> · <span className="mx-1 text-gray-600">5 min. read</span></p>
              </div>
            </div>
          </div>

          <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            {dataStore.map((item, index) => {
              return index == 0 ? "" : (
                <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                  <a href="#_" className="block w-full">
                    <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 h-[14rem]" src={item.image } />
                  </a>
                  <div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Recommended</span>
                  </div>
                  <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a className="text-black underline" href="#_">{item.place}</a></h2>
                  <p className="text-sm text-gray-500">{item.description}     <a href={'detail2'}>CLICK HERE FOR MORE INFO</a></p>
                  <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1">{item.address}</a> · <span className="mx-1">April 17, 2021</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex items-end h-48 overflow-hidden">
          <div className="w-full pt-[56.25%] relative">
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/B9VRvOKKwfs?autoplay=1&showinfo=0&controls=0" title="Rap Việt Mùa 3 - Tập 8: B Ray ghép cặp đấu thần sầu, tạo nên Đại chiến Nón Vàng | Rap Việt 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section>


      

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
