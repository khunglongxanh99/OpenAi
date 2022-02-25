
import React from 'react'
import { TheoryItem } from '..';
import { COURSE_DATA_TEST } from '../../../../utils/demo-data';
import s from './TheoryPage.module.scss';


const TheoryPage = () =>{
  return (
    <div className={s.boxCourse}>
        <TheoryItem course={COURSE_DATA_TEST}/>
    </div>
  );
}

export default TheoryPage;