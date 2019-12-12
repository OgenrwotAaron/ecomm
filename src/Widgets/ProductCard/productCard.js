import React from 'react';
import styles from "./productCard.module.css"

const ProductCard = (props) => {

    return ( 
        <div className={styles.productCard}>
            <div className={styles.itemName}>
                {props.data.name}
            </div>
            <div
                className={styles.productImage}
                style={{backgroundImage:`url("${props.data.image}")`,backgroundPosition:'center'}}
            ></div>
            <div className={styles.itemPrice}>
                {props.data.price}
            </div>
            <button className={styles.buyNow}>BUY NOW</button>
        </div>
     );
}
 
export default ProductCard;