import React from "react";

import CryptoCard from "./CryptoCard";
import "./CryptoList.css";

const CryptoList = ({ coinsData }) => {
    return (
        <div className='crypto_list'>
            {coinsData.map((photos) => {
                return (
                    <CryptoCard
                        key={photos.id}
                        image={photos.url}
                        name={photos.title}
                    />
                );
            })}
        </div>
    );
};

export default CryptoList;