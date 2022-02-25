
import React from 'react'
import { TheoryItem } from '..';
import s from './TheoryDetail.module.scss';


const TheoryDetail = ({item}) =>{   
  return (
    <div className={s.boxDetail}>
        <div className={s.img}>
            <img src={item.imageSrc} alt="" />
        </div>
        <h1 className={s.title}>{item.name}</h1>
        <p className={s.meta}>{item.meta}</p>
        <p className={s.content} dangerouslySetInnerHTML={{ __html: item.content ?? '' }}></p>
    </div>
  );
}

export default TheoryDetail;