import React from 'react';
import './Header.css';
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <React.Fragment>
      <div className='header'>
        <a className='logo' href="/home">Navbar</a>  
        
        <div className='menu'>
          <a href="/home">Нүүр хуудас</a>
          <a href="/products">Бүтээгдэхүүн</a>
          <a href="/contact">Холбоо барих</a>
          <a href="/about">Үйлчилгээний тухай</a>
        </div>

        <div className='button'>
          <button className='signup'>Бүртгүүлэх</button>
          <button className='signin'>Нэвтрэх</button>
          <FaBars className='bars'/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;