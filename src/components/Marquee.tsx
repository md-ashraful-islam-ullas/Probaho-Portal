import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface Headlines {
    id: string
    title: string
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: Headlines[] = data.data;
  return (
    <div className="bg-red-700 text-white">
      <div className="flex max-w-7xl mx-auto">
        <div className="py-1 bg-red-800 px-3">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={15}>
          {headlines.map((h) => (
            <span key={h.id}>
              <Link href={`/article/${h.id}`}><span>{h.title}</span></Link>
              <span className="px-3">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
