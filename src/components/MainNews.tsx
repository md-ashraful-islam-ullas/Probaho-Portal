import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;
  return (
    <div className="flex gap-10">
      <Link href={`/article/${firstNews.id}`}>
        <div className="card bg-base-100 w-110 shadow-sm">
          <figure>
            <Image
              src={firstNews.imageUrl}
              height={600}
              width={600}
              alt={firstNews.imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-600 font-medium">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      <div className="rounded-lg border border-gray-300 bg-base-100 overflow-hidden">
        {otherNews.slice(0, 4).map((on) => (
          <Link key={on.id} href={`/article/${on.id}`}>
            <div className="px-4 py-4 border-b border-gray-200 last:border-b-0">
              <p className="text-red-600 text-sm font-medium mb-1">
                {firstNews.category}
              </p>

              <h2 className="text-lg font-medium leading-snug">{on.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
