'use client'
import styles from './links.module.css'
import NavbarLink from "./NavbarLink/navbarLink";
import { useState } from "react";
const Links = () => 
{
    const links=[
        {
            title:'Home',
            path:'/'
        },{
            title:'About',
            path:'/about'
        }
        ,{
            title:'Contact',
            path:'/contact'
        }
        ,{
            title:'Blog',
            path:'/blog'
        }
    ];
    const [open,setOpen]=useState(false)
    const session=true;
    const isAdmin=false;
  

  return (
  <div className={styles.container}>
  <div className={styles.link}> 
    {links.map((link=>(<NavbarLink item={link} key={link.path}></NavbarLink>)))}

    {session ? (
  <>
    {isAdmin && <NavbarLink item={{title:'Admin',path:'/admin'}}></NavbarLink>}
    <button className={styles.logout}>Logout</button>
  </>
) : (
  <NavbarLink item={{title:'Login', path:'/login'}}></NavbarLink>
)}</div>
{/* <button onClick={() => setOpen(prev => !prev)}>Menu</button> */}
<button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}><i> Menue</i></button>
{
  open &&
    <div className={styles.mobileLinks}>
{links.map((link=>(<NavbarLink item={link} key={link.path}></NavbarLink>)))}
    </div>
  
}

</div>);

};
export default Links;