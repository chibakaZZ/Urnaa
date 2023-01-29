import React, {useState, Badge} from 'react';
import "./Rabbit.css";

const Pets = () => {
  return <div className='pets'>
      <div className='pet1'>
        <h2>Туулай </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quos! Laudantium eos exercitationem officia nostrum ut eligendi? Illo nesciunt ullam, mollitia earum ipsa ea eos consequuntur id voluptates esse dignissimos.</p>
          <button className='cart'> Зөвлөгөө авах</button>
          <button className='cart'> Хоол захиалах</button>
        </div>
      <div className='pet2'></div>
  </div>;
};

export default Pets;
