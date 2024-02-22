import React from "react";
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import Container from "./Container";

const Navbar = () => {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="costs"></img>
                </Link>
                <ul className={styles.list}>
                    <li class={styles.item}><Link to="/">Home</Link></li>
                    <li class={styles.item}><Link to="/project">Projects</Link></li>
                    <li class={styles.item}><Link to="/company">Company</Link></li>
                    <li class={styles.item}><Link to="/contact">Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;