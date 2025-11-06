import React from "react";
import style from "./CartItems.module.css";
import { cartImg } from "../../assets/asset";

const CartItems = () => {
  return (
    <div className={`${style.cartItems} sectionp1`}>
      <table width="100%">
        <thead>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </thead>
        <tbody>
          {cartImg.map((item, index) => {
            return (
              <tr>
                <td>
                  <a href="#">
                    <i className="far fa-times-circle"></i>
                  </a>
                </td>
                <td>
                  <img src={item} key={index} alt="" />
                </td>
                <td>Cartoon Astronaut T-shirts</td>
                <td>$ 118.19</td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td>$118.19</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
