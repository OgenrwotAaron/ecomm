import React from 'react';

import styles from "./productCategory.module.css"
import ProductCard from "../ProductCard/productCard"

const ProductCategory = () => {

    const data=[
        {
            image:"/images/products/thumb_image1.jpg",
            name:"Off-White Shoe",
            price:"75,000 UGX"
        },
        {
            image:"/images/products/thumb_image12.jpg",
            name:"Pink Chair",
            price:"65,000 UGX"
        },
        {
            image:"/images/products/thumb_image4.jpg",
            name:"Nike Sneaker",
            price:"120,000 UGX"
        },
        {
            image:"/images/products/thumb_image8.jpg",
            name:"Back bag",
            price:"69,000 UGX"
        }
    ]

    return ( 
        <div className={styles.productCategory}>
            {data.map((item,i)=>(
                <ProductCard data={item} key={i}/>
            ))}
        </div>
     );
}
 
export default ProductCategory;