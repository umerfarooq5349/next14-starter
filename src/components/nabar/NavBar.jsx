import Link from "next/link";
import Links from "./links/links";
import styles from './nabar.module.css'; 
const NavBar = () => {
  return( <div className={styles.con}>
    <Link href={'/'} className={styles.logo}>Logo</Link>
    <div>
    <Links></Links>
    </div>
  </div>);
};
export default NavBar;