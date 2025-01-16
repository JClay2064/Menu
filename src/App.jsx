import { Title } from "./Title";
import menu from "./data";
import { useState } from "react";
import { Menu } from "./Menu";
import Categories from "./Categories";



const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  
  
  return(
  <main>
    <setion className='menu' >
      <Title text={'our menu'}/>
      <Categories categories={categories} filterItems={setMenuItems}/>
      <Menu items={menuItems}/>
    </setion>
  </main>
  ) 
};
export default App;
