import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div
      class="w-full bg-grey-50 dark:bg-grey-700 border border-gray-300 rounded-xl shadow-md my-4"
      role="alert"
    >
      <div className="flex p-4">
        <div className="flex-shrink-0">
          <svg
            className="flex-shrink-0 size-4 text-red-500 dark:text-red-400 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
        <div className="ms-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
