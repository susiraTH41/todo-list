import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Member',
        path:'/member',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },

]