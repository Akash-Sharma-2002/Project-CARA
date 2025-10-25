import React from 'react'
import style from './feature.module.css'
import { features } from '../../assets/asset'

const Feature = () => {
  return (
    <div className={`${style.feature} sectionp1`}>
       <div className={style.febox}>
        <img src={features.f1} alt="" />
        <h6>Free Shipping</h6>
       </div>
       <div className={style.febox}>
        <img src={features.f2} alt="" />
        <h6>Online Order</h6>
       </div>
       <div className={style.febox}>
        <img src={features.f3} alt="" />
        <h6>Save Money</h6>
       </div>
       <div className={style.febox}>
        <img src={features.f4} alt="" />
        <h6>Promotion </h6>
       </div>
       <div className={style.febox}>
        <img src={features.f5} alt="" />
        <h6>Happy Sell</h6>
       </div>
       <div className={style.febox}>
        <img src={features.f6} alt="" />
        <h6>24x7 Support</h6>
       </div>
    </div>
  )
}

export default Feature