import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {BsSearch} from "react-icons/bs";
import  CreateProject from './create-project/CreateProject';
import { useDispatch} from 'react-redux';
import { openProfileModal } from '../../redux/modal/modalSlice';


const Header = () => {
  const dispatch=useDispatch()


  const handleOpenCompany = () => dispatch(openProfileModal(true))

  return (
    <div className='w-[100%] flex justify-center'>
        <div className='flex flex-row justify-between items-center w-[100%] p-3'>
             <div className="hamburger flex items-center flex-row w-[70%]">
                <div className='hamburger-icon text-4xl BsSearch bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md cursor-pointer z-auto'>
                    <GiHamburgerMenu 
                     onClick={handleOpenCompany}
                    className="text-white cursor-pointer" 
                    />
                </div>
                <div className="search space-x-5 relative mt-4 w-[70%] border-0 outline-none">
                   <BsSearch
                    className="text-[#c9c9c9] text-xl absolute left-10 top-3"
                   />
                    <input type="text" placeholder="Search projects, members,task" 
                    className="w-full  p-2 mb-5 indent-14 border-0" 
                    />
                </div>
             </div>
             <div className="add-company w-[30%] flex justify-end">
                  < CreateProject/>
             </div>
        </div>
    </div>
  )
}

export default Header