import React from 'react';
import styles from "./footer.module.css"

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <span className="icon icon-bars"></span>
            <span className="icon icon-heart-o"></span>
            <span className="icon icon-home2"></span>
            <span className="icon icon-opencart"></span>
            <span className="icon icon-user-o"></span>           
        </div>
     );
}
 
export default Footer;