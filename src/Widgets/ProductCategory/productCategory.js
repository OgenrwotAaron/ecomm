import React from 'react';

import styles from "./productCategory.module.css"
import CategoryCard from '../CategoryCard/categoryCard';

const ProductCategory = () => {

    const data=[
        {
            image:"/images/products/thumb_image5.jpg",
            title:"Glasses & Specs"
        },
        {
            image:"/images/products/thumb_image6.jpg",
            title:"Shoes"
        },
        {
            image:"/images/products/thumb_image7.jpg",
            title:"Watches"
        },
        {
            image:"/images/products/thumb_image9.jpg",
            title:"Bags"
        }
    ]

    return ( 
        <div className={styles.productCategory}>
            {data.map((item,i)=>(
                <CategoryCard key={i} data={item}/>
            ))}
        </div>
     );
}
 
export default ProductCategory;