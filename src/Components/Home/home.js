import React from 'react';
import Slick from '../../Widgets/Slider/slider';

import styles from './home.module.css'
import ProductCategory from '../../Widgets/ProductCategory/productCategory';
import CategoryList from '../../Widgets/CategoryList/categoryList';

const Home = () => {
    return ( 
        <div className={styles.home}>
            <Slick/>
            Category List
            <CategoryList/>
            New Arrival
            <ProductCategory/>
        </div>
     );
}
 
export default Home;