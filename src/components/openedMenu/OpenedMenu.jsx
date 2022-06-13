import style from './OpenedMenu.module.css'

const OpenedMenu = () => {
    return (
        <div className={style.openedMenu}>

        <div className={style.settings}>Settings</div>

        <div className={style.general}>
        <div className={style.generalSVG}></div>
        <span>General</span>
        </div>

        <div className={style.vacationManager}>
        <div className={style.vacationManagerSVG}></div>
        <span>Vacation Manager</span>
        </div>

        <div className={style.subVacationManager}>
        <div>
            <span>Leave Types</span>
        </div>

        <div className={style.active}>
            <span>Locations</span>
        </div>
        </div>

        <div className={style.switcher}></div>
        </div>
    );
}

export default OpenedMenu;