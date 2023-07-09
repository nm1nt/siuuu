import React from "react";

const AddCollectionBtn = (props) => {
  const { title, reStyle, onClick } = props;
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-[16px] h-[60px] ${reStyle} `}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </span>
      <span>{title}</span>
    </button>
  );
};

export default AddCollectionBtn;
