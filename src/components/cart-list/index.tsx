import React from 'react';
import CartItem from '../cart-item';
import './index.css';
import { IProduct } from '../../interfaсes';

interface ICartList {
  elements: IProduct[], 
  pages: number, 
  setPage: React.Dispatch<React.SetStateAction<number>>,  
  page:number,
  setFullCart: React.Dispatch<React.SetStateAction<boolean>>
}

const CartList = ({elements, pages, setPage, page, setFullCart}: ICartList) => {
  let i = pages + 1;

  if(!elements && page > 1){
    setPage(page - 1);
  }else if(!elements){
    setFullCart(false);
  }

  return(
    <div className='products__list'>
      {
        elements
        ?
        elements.map((item: IProduct) => 
       <CartItem 
       product={item} 
       key={item.id} 
       id={i++} 
       />
      )
        :
        <></>
      }
    </div>
  );
};

export default CartList;

