import React from 'react'
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

const Detail1 = () => {

	  

	
	  const { dataStore, setDataStore} =
		useFirebaseStore();
	
	

	  const songRef = collection(db, FIREBASE_COLLECTION);
	

	  const getFirebaseData = async () => {
		setIsLoading(true);
		const res = await getDocs(songRef);

		const collectionData = res.docs.map((doc) => ({
		  ...doc.data(),
		  id: doc.id,
		}));
		setDataStore(collectionData);
		setIsLoading(false);
	  };	
	
	
	
	

  return (
    <div>

<div>
    <i>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</i>
</div>
		<section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://www.kynghidongduong.vn/userfiles/images/tour-nuoc-ngoai/dubai/burj-al-arab-du-lich-dubai-kynghidongduong-001.jpg" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
        </div>

        {/* <!-- Content --> */}
        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Khách sạn 7 sao Burj Al Arab có gì? - Du lịch Dubai (2023)
Khách sạn 7 sao Burj Al Arab được ví như một ngọn hải đăng bên bờ biển Jumeirah, biểu tượng của sự xa hoa, tráng lệ của Dubai. Vì sao có tận 7 sao? Dù các hành trình Du lịch Dubai chỉ đưa khách tham quan đứng bên ngoài check-in khách sạn thôi chứ không được vào trong nếu không đặt phòng nhưng chắc hẳn bạn vẫn tò mò nơi này có gì mà có tới 7 sao đẳng cấp phải không? Hãy cùng Kỳ Nghỉ Đông Dương tìm hiểu trước khi theo Tour Dubai đến đây check-in nhé!
            </p>
            
        </div>
        {/* <!-- End  Content --> */}
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Content --> */}
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">

            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Trước khi đi vào bài viết chi tiết, mời bạn xem qua những top 12 sự thật về khách sạn này để xem sự đẳng cấp được thể hiện như nào nhé!

1. Khách sạn này thực chất chỉ có 5 sao. Danh hiệu 7 sao là do một nhà báo người Anh đặt sau khi được trải nghiệm sự tuyệt vời trên cả đẳng cấp 5 sao nên đã ưu ái dành tặng 7 sao. Dù sao đó khách sạn luôn từ chối vinh dự này nhưng danh hiệu vẫn luôn được gắn liền với khách sạn.

2. Mọi thứ trong khách sạn từ sàn, tường, thậm chí đồ trang trí, nội thất đều được làm bằng vàng và đá cẩm thạch. Thậm chí trần của nhà hàng trong khách sạn còn được làm từ pha lê Swarovski.
            </p>
           
        </div>
        {/* <!-- End  Content --> */}

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://www.kynghidongduong.vn/userfiles/images/tour-nuoc-ngoai/dubai/burj-al-arab-du-lich-dubai-kynghidongduong-031.jpg" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://www.kynghidongduong.vn/userfiles/images/tour-nuoc-ngoai/dubai/burj-al-arab-du-lich-dubai-kynghidongduong-005.jpg" />
        </div>

        {/* <!-- Content --> */}
        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">

            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            3. Tỉ lệ nhân viên và khách tới Burj Al Arab là 6:1. Vậy nên khách hàng được chăm sóc cực kỳ chu đáo. Thậm chí mỗi phòng còn có 1 quản gia riêng. 

4. Đây là công trình khách sạn đang hoạt động cao nhất thế giới (không kể các tòa nhà đa chức năng như Tháp Jin Mao ở Thượng Hải hay khách sạn Ryugyong chưa hoàn thành ở Bình Nhưỡng, Triều Tiên).

5. Thiết kế của tòa nhà lấy cảm hứng từ hình dáng của một con loại thuyền buồm Ả Rập (Thuyền Dhow).
            </p>
            
        </div>
        {/* <!-- End  Content --> */}
    </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Content --> */}
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">

            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            6. Phần trung tâm công trình cao 180 mét, là một trong những tháp cao nhất thế giới.

7. Tất cả 202 phòng của khách sạn đều là phòng có hai tầng, có diện tích từ 170 mét vuông đến 780 mét vuông. Một số phòng có view toàn cảnh biển.
8. Khách sạn 7 sao Burj Al Arab là công trình kiến ​​trúc cao nhất thế giới với mặt tiền làm bằng sợi thủy tinh - loại vật liệu tốt nhất, bền nhất để chống chọi với thời tiết khắc nghiệt ở Dubai.

9. Có một sân bay trực thăng rộng 24 mét nằm cách tòa nhà 210 mét so với mặt đất. Khách đặt phòng ở đây được đưa đón bằng ô tô hoặc trực thăng riêng. 
            </p>
           
        </div>
        {/* <!-- End  Content --> */}

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://www.kynghidongduong.vn/userfiles/images/tour-nuoc-ngoai/dubai/burj-al-arab-du-lich-dubai-kynghidongduong-027.jpg" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://www.kynghidongduong.vn/userfiles/images/tour-nuoc-ngoai/dubai/burj-al-arab-du-lich-dubai-kynghidongduong-002.jpg" />
        </div>

        {/* <!-- Content --> */}
        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">

            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            10. Hệ thống đèn chiếu sáng của khách sạn phổ rộng từ ánh sáng trắng đến đa màu, thay đổi từ ánh sáng này sang ánh sáng khác sau mỗi 30 phút thể hiện sự khi trời càng tối.

11. Nhà hàng Al Muntaha nằm ở độ cao 200 m trên Vịnh Ba Tư, có tầm nhìn tuyệt vời ra Dubai. Khách có thể đi lên bằng thang máy có tầm nhìn toàn cảnh.

12. Khách sạn có tổng cộng tám nhà hàng và quán bar.
            </p>
            
        </div>
        {/* <!-- End  Content --> */}
    </div>


</section>



            
	</div>
  )
}

export default Detail1