import React from 'react';
import Slider from "react-slick"
import ProductCard from '../ProductCard/productCard';

const CategoryList = () => {

    const settings={
        arrows: true,
        infinite:false,
        slidesToShow: 2,
        autoPlay:false
    }

    const data=[
        {
            image:"/images/products/thumb_image6.jpg",
            name:"Elegant Heels",
            price:"55,000 UGX"
        },
        {
            image:"/images/products/thumb_image3.jpg",
            name:"Nike Shoe",
            price:"250,000 UGX"
        },
        {
            image:"/images/products/thumb_image11.jpg",
            name:"Samsung A70",
            price:"800,000 UGX"
        },
        {
            image:"/images/products/thumb_image10.jpg",
            name:"Wall Clock",
            price:"45,000 UGX"
        },
        {
            image:"/images/products/thumb_image7.jpg",
            name:"Wrist Watch",
            price:"25,000 UGX"
        },
        {
            image:"/images/products/thumb_image2.jpg",
            name:"Beats Headset",
            price:"175,000 UGX"
        },
        {
            image:"/images/products/thumb_image9.jpg",
            name:"Gucci Bag",
            price:"250,000 UGX"
        }
    ]

    return ( 
        <Slider {...settings}>
            {data.map((item,i)=>(
                <ProductCard key={i} data={item}/>
            ))}
        </Slider>
     );
}
 
export default CategoryList;
