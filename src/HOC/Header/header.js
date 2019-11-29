import React from 'react';
import styles from "./header.module.css"

const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.logo}>LOGO</div>
            <div>
                <span className="icon icon-search2"></span>
            </div>
        </div>
     );
}
 
export default Header;