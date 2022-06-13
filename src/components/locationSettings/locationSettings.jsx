import style from './locationSettings.module.css'

const LocationSettings = () => {
    return (
        <div className={style.locationSettings}>
          <div className={style.breadcrumb}>
            <div className={style.breadcrumbSettings}>
              <div className={style.breadcrumbSettingsIcon}></div>
              <span>Settings</span>
            </div>
            <div className={style.breadcrumbVacation}>
              <span>Vacation Manager</span>
            </div>
            <div className={style.breadcrumbLocations}>
              <span>Locations</span>
            </div>
          </div>

          <div className={style.countrySettings}>
            <div className={style.country}>
              <span>Australia</span>
            </div>

            <div className={style.countrySettingsButtons}>
              <button>Delete</button>
              <button>Edit Location</button>
            </div>
          </div>

          <div>
            <div className={style.navigationBar}>
              <span>General</span>
              <span>Leave Policies</span>
              <span>Holidays</span>
            </div>

            <div className={style.underLine}></div>
          </div>

          <div className={style.infoBlock}>
            <div className={style.infoBlockKeys}>
              <span>Name</span>
              <span>Workweek</span>
              <span>Timezone</span>
              <span className={style.iconInfo}>Leave Quota Reset Based On</span>
              <span>Should Brought Forward days expire?</span>
            </div>

            <div className={style.infoBlockValues}>
              <span>Australia</span>
              <div className={style.workDays}>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
              </div>
              <span>(GMT+03:00) Moscow+00 - Moscow</span>
              <span>Accounting Year (January 1st)</span>
              <span>Never</span>
            </div>
          </div>
          <div className={style.usersBlock}>
              <span>User(s)</span>

              <div className={style.usersAvatars}>
                <div className={style.ava}></div>
                <div className={style.ava}></div>
                <div className={style.ava}></div>
                <div className={style.ava}></div>
                <div className={style.ava}></div>
                <div className={style.ava}></div>
              </div>

              <span>Assign</span>
            </div>
        </div>
    );
}

export default LocationSettings;