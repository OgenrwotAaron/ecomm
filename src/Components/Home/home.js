import React from 'react';
import Slick from '../../Widgets/Slider/slider';

import styles from './home.module.css'
import ProductCategory from '../../Widgets/ProductCategory/productCategory';
import CategoryList from '../../Widgets/CategoryList/categoryList';

const Home = () => {
    return ( 
        <div className={styles.home}>
            <Slick/>
            <div className={styles.catList}>Top Selling Products</div>
            <CategoryList/>
            <div className={styles.newArr}>Popular Categories</div>
            <ProductCategory/>
        </div>
     );
}
 
export default Home;