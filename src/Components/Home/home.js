import React from 'react';
import Slick from '../../Widgets/Slider/slider';

import styles from './home.module.css'

const Home = () => {
    return ( 
        <div>
            <Slick/>
            <div className={styles.productCard}>
                <div 
                    className={styles.productImage}
                    style={{background:'url("/images/products/thumb_image4.jpg")'}}
                ></div>
                Card
            </div>
        </div>
     );
}
 
export default Home;