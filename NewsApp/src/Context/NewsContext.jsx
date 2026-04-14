import { createContext, useContext, useState } from "react";
import api from '../Config/axios'

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [loading,setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [bar,setBar] = useState(false);
    const fetchNews = async (url = '/everything?q=india') => {
        setLoading(true);
        try {
            const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setLoading(false)
            return response.data
        } catch (error) {
                console.log(error)
                setLoading(false)
                return "Server Error";
        }
    }
     const value = {
        news,
        setNews,
        fetchNews,
        loading,
        bar,
        setBar
    }
    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const UseNewsContext = () => (
    useContext(NewsContext)
)

export { UseNewsContext, NewsContextProvider }