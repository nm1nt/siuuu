import React, { useEffect, useState } from "react";
import { useControlModal } from "../../store/useControlModal";

const CustomModal = (props) => {
  const { addCollection, updateCollection } = props;

  const { modalVisible, setModalVisible, selectedItem, setSelectedItem } =
    useControlModal();

  const [addSong, setAddSong] = useState({
    album: "",
    coverUrl: "",
    isLike: false,
    name: "",
    releaseAt: "",
    singer: "",
  });

  useEffect(() => {
    if (selectedItem) {
      setAddSong(selectedItem);
    }
  }, [selectedItem]);


  useEffect(() => {
    if(addSong.isLike === "true"){
        setAddSong({...addSong, isLike: true})
    }else if (addSong.isLike=== "false") {
      setAddSong({ ...addSong, isLike: false });
    }
    }, [addSong.isLike])




  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div
              onClick={() => {
                setModalVisible(!modalVisible);
                setSelectedItem({});
              }}
              className="absolute inset-0 bg-gray-900 opacity-75"
            />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label>Song name</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter song name"
                value={addSong.name}
                onChange={(e) =>
                  setAddSong({ ...addSong, name: e.target.value })
                }
              />
              <label>Singer</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter song singer"
                value={addSong.singer}
                onChange={(e) =>
                  setAddSong({ ...addSong, singer: e.target.value })
                }
              />
              <label>Album</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter song album"
                value={addSong.album}
                onChange={(e) =>
                  setAddSong({ ...addSong, album: e.target.value })
                }
              />
              <label>Image Url</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter song image Url"
                value={addSong.coverUrl}
                onChange={(e) =>
                  setAddSong({ ...addSong, coverUrl: e.target.value })
                }
              />
              <label>Release At</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter release at"
                value={
                  addSong.releaseAt
                }
                onChange={(e) =>
                  setAddSong({ ...addSong, releaseAt: e.target.value })
                }
              />
              <label>Favourite</label>
              <input
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                placeholder="Enter true of false"
                value={addSong.isLike}
                onChange={(e) =>
                  setAddSong({ ...addSong, isLike: e.target.value})
                }
              />
            </div>

            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                onClick={() => {
                  setModalVisible(!modalVisible);
                  setSelectedItem({});
                }}
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (selectedItem) {
                    updateCollection(selectedItem.id, addSong);
                  } else {
                    addCollection(addSong);
                  }
                  setModalVisible(!modalVisible);
                  setSelectedItem({});
                }}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                {selectedItem ? "Update Song" : "Add new Song"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
