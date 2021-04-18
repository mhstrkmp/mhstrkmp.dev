import React from "react";

const ResourceItem = ({ item }) => {
  return (
    <>
      {item.map((data, index) => (
        <div key={`${data.resourceName}_${index}`} className="pl-4 my-2">
          <a
            href={data.resourceUrl}
            className="text-purple-800 hover:text-purple-700"
          >
            {data.resourceName}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
          <p className="text-justify md:text-left">{data.resourceDescrition}</p>
        </div>
      ))}
    </>
  );
};

export default ResourceItem;
