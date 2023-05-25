import React from 'react';

const CoverSection = ({ BgCoverPic, title, description }) => {
    return (
        <div>
            <div className="hero min-h-[700px]" style={{ backgroundImage: `url("${BgCoverPic}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content w-[800px] bg-black  bg-opacity-40">
                    <div className="max-w-md   ">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                         
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoverSection;