import React from 'react';
import styles from "./productCard.module.css"

const ProductCard = (props) => {
    console.log(props.data)
    return ( 
        <div className={styles.productCard}>
            <div 
                className={styles.productImage}
                style={{backgroundImage:`url("${props.data.image}")`,backgroundPosition:'center'}}
            ></div>
            <div className={styles.itemPrice}>
                {props.data.price}
            </div>
            <div className={styles.addToFav}>
                <span className="icon icon-heart-o"></span>
            </div>
            <div className={styles.itemName}>
                {props.data.name}
            </div>
            <div className={styles.addToCart}>
                <span className="icon icon-opencart"></span>
            </div>
        </div>
     );
}
 
export default ProductCard;