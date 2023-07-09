import React from "react";
import { useFirebaseStore } from "../../../store/UseFirebase";
import { useControlModal } from "../../../store/useControlModal";


const VerticalCarousel = (props) => {
  const { deleteDocument } = props;
  const { dataStore } = useFirebaseStore();
  const { setModalVisible, setSelectedItem } = useControlModal();

  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
      {dataStore?.map((item, index) => {
        return (
          <div key={index} className="carousel-item h-full">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.coverUrl} alt="cover" />
              </figure>
              <div
                onClick={() => {
                  deleteDocument(item.id);
                }}
                className="text-3xl text-white absolute right-4 top-4 bg-blue-400 rounded-sm px-3 py-2"
              >
                X
              </div>
              <div
                className="text-3xl text-white absolute right-4 bottom-4"
                onClick={() => {
                  setModalVisible(true);
                  setSelectedItem(item);
                }}
              >Edit</div>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">
                    {item.isLike ? "❤️" : "🥺"}
                  </div>
                </h2>
                <p>Album: {item.album}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.singer}</div>
                  <div className="badge badge-outline">{item.releaseAt}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCarousel;
