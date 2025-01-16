import { Title } from "./Title";
import menu from "./data";
import { useState } from "react";
import { Menu } from "./Menu";



const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  
  
  return(
  <main>
    <setion className='menu' >
      <Title text={'our menu'}/>
      <Menu items={menuItems}/>
    </setion>
  </main>
  ) 
};
export default App;
