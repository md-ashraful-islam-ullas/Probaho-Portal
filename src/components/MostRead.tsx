import Link from "next/link";
import React from "react";
interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news: MostReadNews[] = data.data;
  //   console.log(news);
  return (
    <div className="card bg-base-100 border border-gray-300 p-4">
      <h2 className="font-bold text-lg">সর্বাধিক পঠিত</h2>
      <div>
        {news.map((n, i) => (
          <Link key={n.id} href={`/article/${n.id}`}>
            <div className="py-2 flex gap-3">
              <span className="text-[18px] text-red-700 font-bold">
                {i + 1}
              </span>
              <h2 className="text-lg font-medium leading-snug">{n.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
