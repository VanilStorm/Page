import style from './Menu.module.css'

const Menu = () => {
    return (
        <div className={style.menu}>
          <div className={style.topMenu}>
            <div className={style.icon}></div>

            <div className={style.dashboard}></div>

            <div className={style.users}></div>

            <div className={style.vacations}></div>
          </div>

          <div className={style.botMenu}>
            <div className={style.notification}></div>

            <div className={style.avatar}></div>
          </div>
        </div>
    );
}

export default Menu;