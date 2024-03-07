'use client'
import Link from "next/link";
import style from './navbarLink.module.css'
import { usePathname } from "next/navigation";

const NavbarLink = ({item}) => {

const pathName=usePathname()

  return( 
  <div className={`${style.container} ${pathName===item.path && style.active}`}>
  <Link href={item.path}>{item.title } </Link>
  </div>);
};
export default NavbarLink;