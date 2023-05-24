import React from 'react';

import "./Notice.css"

const NoticeSection = () => {
    return (
        <div className='mt-36 '>
            <div className='bg-img py-36'>
                <div className="card md:w-[900px] sm:w-[500px] mx-auto bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className=" text-3xl">Bistro Boss!</h2>
                        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NoticeSection;