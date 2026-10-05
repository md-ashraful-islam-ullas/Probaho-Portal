import Image from "next/image";
import React from "react";
interface News {
    id: string,
    title: string,
    description: string,
    category: string
    imageUrl: string
    imageAlt: string
}
const NewsCard = ({ news }: {news: News}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-base-100 overflow-hidden">
      <figure>
        <Image
          src={news.imageUrl}
          width={400}
          height={220}
          alt={news.imageAlt}
          className="w-full h-40 object-cover"
        />
      </figure>

      <div className="p-4">
        <p className="text-red-600 text-sm font-medium mb-2">
          {news.category}
        </p>

        <h2 className="text-[16px] font-semibold leading-snug">
          {news.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {news.description}
        </p>

        {/* <p className="text-xs text-gray-400 mt-3">
          {news.date}
        </p> */}
      </div>
    </div>
  );
};

export default NewsCard;