import Link from "next/link";
import Links from "./links/links";
import styles from './nabar.module.css'; 
const NavBar = () => {
  return( <div className={styles.con}>
    <div className={styles.logo}>Logo</div>
    <div>
    <Links></Links>
    </div>
  </div>);
};
export default NavBar;