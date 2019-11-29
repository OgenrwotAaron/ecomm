import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'

import styles from "./slider.module.css"

const Slick = () => {
    const settings={
        infinite:true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnfocus:true,
    }

    const data=[
        {
            image:"/images/products/thumb_image1.jpg",
            title:"First"
        },
        {
            image:"/images/products/thumb_image12.jpg",
            title:"Second"
        },
        {
            image:"/images/products/thumb_image4.jpg",
            title:"Third"
        },
        {
            image:"/images/products/thumb_image8.jpg",
            title:"Fourth"
        }
    ]

    return ( 
        <Slider {...settings}>
            {
                data.map((item,i)=>(
                    <div key={i}>
                        <div key={i} className={styles.featured_item}>
                            <div className={styles.featured_image}
                                style={{
                                    background:`url(${item.image})`
                            }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </Slider>
     );
}
 
export default Slick;