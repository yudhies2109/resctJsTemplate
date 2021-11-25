import React from 'react';
import { Data } from '../assets/dataCarousel';

const Testimoni = () => {
    return (
        <div>
            {
                Data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <h5>{item.position}</h5>
                            <p>{item.desc}</p>
                            <img src={item.image} alt="1" />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Testimoni
