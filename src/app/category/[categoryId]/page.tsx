import NewsCard from '@/components/NewsCard';
import React from 'react';

interface News {
    id: string
    title: string
    description: string
    category:string
    imageUrl: string
    imageAlt: string
}

const CategoryNews = async({params}: {params:{categoryId: string}}) => {
    const {categoryId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json();
    // console.log(data)
    const categoryNews: News[] = data.data;
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-xl font-bold border-b-3 border-red-700 py-3'>{data.title}</h2>
            <div className='grid grid-cols-3 gap-5 py-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;