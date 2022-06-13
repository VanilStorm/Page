import style from  './App.module.css'
import Menu from './components/menu/Menu';
import OpenedMenu from './components/openedMenu/OpenedMenu';
import LocationSettings from './components/locationSettings/locationSettings';

const App = () => {
  return (
      <div className={style.body}>
        <Menu/>
        <OpenedMenu/>
        <LocationSettings/>
      </div>
  );
}

export default App;
