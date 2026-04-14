import React from 'react'
import Wrapper from './Wrapper'
import { UseNewsContext } from '../Context/NewsContext'

const Category = ({ className }) => {
  // Access bar state from context
  const { setNews, fetchNews, bar, setBar } = UseNewsContext()
  const Categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  const handleClick = async (e) => {
    const value = e.target.value;
    const data = await fetchNews(`/top-headlines?category=${value}`)
    setNews(data.articles)
    
    // Auto-close sidebar on mobile after clicking a category
    if (window.innerWidth < 1024) {
      setBar(false)
    }
  }

  return (
    <Wrapper>
     
      <div className={`
        ${bar ? 'flex' : 'hidden'} 
        lg:flex 
        flex-col lg:flex-row 
        max-w-full m-auto p-1 gap-2 justify-center 
        ${className}
      `}>
        {Categories.map((item, index) => (
          <button 
            key={index}
            onClick={handleClick}
            value={item}
            className="btn btn-primary btn-sm lg:btn-md capitalize"
          >
            {item}
          </button>
        ))}
      </div>
    </Wrapper>
  )
}

export default Category
