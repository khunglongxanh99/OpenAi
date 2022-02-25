import Header from '../Header/Header';
import s from './Layout.module.scss';

const Layout = ({ children }) => {
  
  return (
      <div className={s.wrapper}>
        <div className={s.row}>
          <div className={s.header}>
            <Header/>
          </div>
          <div className={s.main}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    )
}

export default Layout
