import React, { useEffect } from 'react'
import Wrapper from '../Component/Wrapper'
import { UseNewsContext } from '../Context/NewsContext'
import Loader from '../Component/Loader';

const News = () => {
    const { news, setNews, fetchNews, loading } = UseNewsContext();

    //load data on intial render
    useEffect(() => {
        (async () => {
            const data = await fetchNews()
            if (typeof (data) === 'string') {
                setNews(null)
            }
            else {
                setNews(data.articles)
            }

        })()

    }, [])
    if(news === null) return "Server Error"
    if (loading) return <Loader />
    return (
        <Wrapper>
            <div className='w-full p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    news.map((item, index) => {
                        if (!item.urlToImage) return null
                        return <NewsCard key={index} details={item} />
                    })
                }
            </div>
        </Wrapper>
    )
}

const NewsCard = ({ details }) => (

    <div className="card bg-base-100  shadow-sm">
        <figure>
            <img className='w-full aspect-video object-contain'
                src={details.urlToImage}
                alt='Newsimg' />
        </figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-2">{details?.title}</h2>
            <p className='line-clamp-2'>{details.description}</p>
            <div className="card-actions justify-end">
                <button onClick={() => (window.open(details.url))} className="btn bg-pink-600 badge-outline">Read More</button>
            </div>
        </div>
    </div>
)
export default News
