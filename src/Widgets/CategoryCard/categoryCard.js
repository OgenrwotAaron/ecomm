import React from 'react';
import styles from './categoryCard.module.css'

const CategoryCard = (props) => {
    return ( 
        <div className={styles.productCard}>
            <div
                className={styles.productImage}
                style={{backgroundImage:`url("${props.data.image}")`,backgroundPosition:'center'}}
            ></div>
            <button className={styles.buyNow}>{props.data.title}</button>
        </div>
     );
}
 
export default CategoryCard;