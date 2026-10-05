import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews: IOtherSection[] = sections.slice(1);
  // console.log(otherNews);
  // console.log(mainNews)
  return (
    <div>
      
      <div className="grid grid-cols-3 max-w-7xl mx-auto py-5 gap-5">
        {/* News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="py-7">
            {otherNews.map((on) => (
              <div key={on.curationId}>
                <h1 className="border-b-3 border-red-700 font-bold pb-2">
                  {on.title}
                </h1>
                <div className="grid grid-cols-3 gap-3 py-4">
                  {on.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <div className="col-span-1 ">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
