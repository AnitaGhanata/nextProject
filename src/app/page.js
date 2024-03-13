// import Image from 'next/image'
// import styles from './page.module.css'
// import Head from 'next/head'
import css from "styled-jsx/css"
import './globals.css'

export default function Home() {
  return (
   <>
   
   <div className='header'>
   <nav class="navbar">
        <div class="navbar-container container">
            
            
            <ul class="menu-items">
                <li><a href="#">Login</a></li>
                <li><a href="#">Cart</a></li>
                
            </ul>
            <div>
            <h6 class="logo">Flipkart</h6>
            <p>Explore Plus</p>
            </div>
          
        </div>
    </nav>
   </div>
   </>
  )
}
