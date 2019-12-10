import React from 'react';
import Slider from "react-slick"

const CategoryList = () => {

    const settings={
        arrows: false,
        slidesToShow: 4,
        autoPlay:false
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
        },
        {
            image:"/images/products/thumb_image4.jpg",
            title:"Fifth"
        },
        {
            image:"/images/products/thumb_image8.jpg",
            title:"Sixth"
        }
    ]

    return ( 
        <Slider {...settings}>
            {data.map((item,i)=>(
                <p key={i}>{item.title}</p>
            ))}
        </Slider>
     );
}
 
export default CategoryList;