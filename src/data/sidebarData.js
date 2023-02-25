import { FaTh, FaRegChartBar } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';

const menu = [
  {
    title: 'Dashboard',
    icon: <FaTh />,
    path: '/dashboard',
  },
  {
    title: 'Add Product',
    icon: <BiImageAdd />,
    path: '/products/addproduct',
  },
  {
    title: 'Account',
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: 'Profile',
        path: '/user/profile',
      },
      {
        title: 'Edit Profile',
        path: '/user/editprofile',
      },
    ],
  },
];

export default menu;
