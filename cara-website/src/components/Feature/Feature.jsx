import React from 'react'
import style from './feature.module.css'
import { asset } from '../../assets/asset'

const Feature = () => {
  return (
    <div className={style.feature}>
       <div className={style.febox}>
        <img src={asset.f1} alt="" />
        <h6>Free Shipping</h6>
       </div>
    </div>
  )
}

export default Feature