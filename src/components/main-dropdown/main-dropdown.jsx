import { Menu, Dropdown } from 'antd';
import { ChevronDown } from "react-feather";


const menuItems = [
    { key: '1', title: 'Nanny\'s Shop' },
    { key: '2', title: 'Slice Lagos' },
    { key: '3', title: 'Noir Restaurant' },
    { key: '4', title: 'Ben\'s Beans' },
  ];

const MainDropdown = ({title, faded}) => {
  const handleMenuClick = (e) => {
    console.log(`Clicked menu item: ${e.key}`);
    };
  
    const menu = (
      <Menu onClick={handleMenuClick}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>{item.title}</Menu.Item>
        ))}
      </Menu>
    );
  
    return (
      <Dropdown 
      className='flex gap-2.5 w-36 text-sm text-gray-800 font-light'
      overlay={menu}>
        <button className={`px-2.5 py-1 ${faded === "true" ? "text-zinc-400" : "text-zinc-600"}`}
        onClick={(e) => e.preventDefault()}> {/* Use a link or a button as the trigger */}
          {title} <ChevronDown />
        </button>
      </Dropdown>
    );
};

export default MainDropdown
  