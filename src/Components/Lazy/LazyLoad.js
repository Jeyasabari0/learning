import React, { useEffect, useState } from "react";
import axios from "axios";

import CryptoList from "./CryptoList";
import Loader from "./Loader";

// const PAGE_NUMBER = 1;

const LazyLoad = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/photos?_limit=12&_page=1`
            );

            setCoinsData((prev) => {
                return [...prev,...response.data];
            });
            setLoading(false);
        }, 1500);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div>
            <h1>Lazy Loading 5000 Images</h1>
            <CryptoList coinsData={coinsData} />
            {loading && <Loader />}
        </div>
    );
};

export default LazyLoad;