import React from "react";

const Timeline = () => {
  return (
    <div className="mt-4 mx-2">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-black/80">
            Event 1
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-black/80">
            Event 2
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            distinctio dolorum dolores molestias odit ducimus commodi pariatur
            unde, doloremque animi fugiat suscipit nisi nam eos blanditiis neque
            assumenda expedita quas!
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
