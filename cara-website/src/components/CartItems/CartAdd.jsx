import React from "react";
import style from "./CartItems.module.css";

const CartAdd = () => {
  return (
    <div className={`${style.cartAdd} sectionp1`}>
      <div id={style.coupon}>
        <h3>Apply Coupon</h3>
        <div>
          <input type="text" placeholder="Enter coupon code" />
          <button className="normal">Apply</button>
        </div>
      </div>
      <div id={style.subtotal}>
        <h3>Cart Totals</h3>
        <table>
          <tr>
            <td>Cart Subtotal</td>
            <td>$ 335</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>$ 335</td>
          </tr>
        </table>
        <button className="normal">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartAdd;
