import Link from "next/link";
import Links from "./links/links";
import styles from './nabar.moduel.css'; 
const NavBar = () => {
  return( <div className={styles.con}>
    <div>Logo</div>
    <div>
    <Links></Links>
    </div>
  </div>);
};
export default NavBar;