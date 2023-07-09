import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Lesson4 = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [weatherData, setWeatherData] = useState({})
    const [activeCity, setActiveCity] = useState('HN')  // DN // HP

    const handleLinkCityWithButton = () => {
        if (activeCity === "HN") {
          return "Ha Noi";
        } else if (activeCity === "DN") {
          return "Da Nang";
        } else if (activeCity === "HP") {
          return "Hai Phong";
        }
    }


    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${handleLinkCityWithButton()}?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json`;


    // chay ham fetchWeather() 1 lan duy nhat voi useEffect() co deps la 1 empty array

    const fetchWeather = async () => {
        setIsLoading(true)  // set trang thai loading = true de nguoi dung nhin thay chu loading... thay vi 1 man hinh trang
        const res = await axios.get(API_URL);
        const data = res.data
        setWeatherData(data)
        setIsLoading(false)  // sau khi co data tu api thi tat trang thai loading di

    }


    // useEffect se duọc gọi lại mỗi khi currentCity thay đổi
    useEffect(() => {
      fetchWeather();
    }, [activeCity]);  // moi khi activeCity thay doi => goi lai ham fetchWeather() voi activeCity === tên thành phố trên nút bấm


    if(isLoading) return (
            <div className='text-3xl text-red-500 '>
                Loading nè .....
            </div>
    )  // khi trang thai loading = true thi se hien ra dong nay


  return (
    <div>
      <div className="btn-group btn-group-horizontal flex justify-center items-center mb-4">
        <button
          onClick={() => setActiveCity("HN")}
          className={`btn ${activeCity === "HN" ? "btn-active" : ""}  `}
        >
          Ha Noi
        </button>
        <button
          className={`btn ${activeCity === "DN" ? "btn-active" : ""}  `}
          onClick={() => setActiveCity("DN")}
        >
          Da Nang
        </button>
        <button
          className={`btn ${activeCity === "HP" ? "btn-active" : ""}  `}
          onClick={() => setActiveCity("HP")}
        >
          Hai Phong
        </button>
      </div>

      <div aria-label="card-overlay" className="relative w-[350px] h-[400px]">
        <img
          src="https://bit.ly/3zzCTUT"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
          <h3 className="text-base font-bold">
            {weatherData.address} - {weatherData.timezone}
          </h3>
          <span className="text-sm text-gray-400">
            {weatherData.description}
          </span>
          <span className="text-sm text-gray-400">
            {weatherData.resolvedAddress}
          </span>
          <h3 className="text-base font-bold">
            Condition: {weatherData?.currentConditions?.conditions}
          </h3>
          <h3 className="text-base font-bold">
            Temp: {weatherData?.currentConditions?.temp}C - Humidity:{" "}
            {weatherData?.currentConditions?.humidity} %
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Lesson4


// useEffect()

// 1, useEffect() nó làm 1 hook (là 1 hàm của react), và để sử dụng ta cần import nó từ react

// cú pháp : useEffect(() => {}, []) : cú pháp giống hàm map(()=> {})

// công dụng : quản lí các side effect (các tác động phụ) của component ( hành động gọi API, promise, asyn, await, timeout, interval, ...)

// 2, các trường hợp của useEffect()
//1, useEffect(()=> {}) : chạy liên tục khi component đc render : không dùng 
//2, useEffect(()=> {}, []) : chạy 1 lần duy nhất khi component đc render lần đầu tiên ( chạy duy nhất 1 lần)
//3, useEffect(()=> {}, [dependence1, dep2, dep3]) : chạy lại mỗi khi dependence thay đổi 