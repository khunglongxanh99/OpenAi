
import React from 'react'
import img1 from './img/generic-badge.svg';
import s from './TheoryItem.module.scss';
import { StarFilled } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link'

const TheoryItem = ({course}) =>{

  return (
    <>
      {
      course.map((item)=>(
        <div className={s.boxInner} key={item.name}>
            <div className={s.img}>
            <Link href={`detail/${item.id}`}>
              <a><img src={img1.src} alt="" /></a>
            </Link>
            </div>
            <div className={s.content}>
              <div className={s.title}>
                <Link href={`detail/${item.id}`}>
                  <a>{item.name}</a>
                </Link>
              </div>
              <div className={s.star}>
                <StarFilled  />
                <StarFilled  />
                <StarFilled  />
                <StarFilled  />
                <StarFilled  />
              </div>
              <div className={s.meta}>
                {item.meta}
              </div>
                  <Link href={`detail/${item.id}`}>
                    <a><Button type="primary">Học Ngay</Button></a>
                  </Link>
            </div>
        </div>
      ))}
    
    </>
    
  );
}

export default TheoryItem;