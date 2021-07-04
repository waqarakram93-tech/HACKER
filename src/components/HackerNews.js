import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

const HackerNews = () => {
    const [news, setNews] = useState({});
    useEffect(() => {
        fetch("http://hn.algolia.com/api/v1/search?query=React")
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, []);
    return news.hits
        ? news.hits.map((hit) => <SingleNews key={hit.id} issue={hit} />)
        : "Loading...";
};

export default HackerNews;