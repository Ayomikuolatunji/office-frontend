import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Goback from './Goback'
import UpdateName from './UpdateName'
import UpdateEmail from "./UpdateEmail"
import UpdateProfilePicture from './UpdateProfilePicture'
import UpdateRole from './UpdateRole'
import UpdateAbout from './UpdateAbout'
import UpdateLocation from './UpdateLocation'
import { VscSignOut } from 'react-icons/vsc'
import { useRouter } from 'next/router'

const ProfileSettings = () => { 
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
  const employeeData=useSelector(state=>state.employeeInfo.employeeData)
  const isCompanyOpen=useSelector(state=>state.modal.isCompanyOpen)
  
  const router = useRouter();


	useEffect(() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},[ router, isLoggedIn ]);

	const LogoutFunc = () => {
		if (isLoggedIn) {
			router.push('/login');
			dispatch(logoutEmployee());
		}
	};


  return (
    <div 
    className={`fixed left-0 right-0 bottom-0 bg-blue-400 
    h-[100vh] z-[999] w-[20%] ${isCompanyOpen ? 'opacity-100':'opacity-0 hidden transition-opacity duration-200 ease-out'}`}>
        {/* go back */}
        <Goback/>
         {/* profile components */}
         <div className='w-full flex justify-center mt-7 flex-col'>
            {/* update profile picture */}
           <UpdateProfilePicture employeeData={employeeData}/>
           <UpdateName employeeData={employeeData}/>
           <UpdateEmail  employeeData={employeeData}/>
           <UpdateRole employeeData={employeeData}/>
           <UpdateAbout employeeData={employeeData}/>
           <UpdateLocation employeeData={employeeData}/>
         </div>
         <div className="text-[#F1F5F8] py-[0.45em] px-[0.75em] text-[1rem] w-[70%] z-[2] my-[0] mx-auto cursor-pointer">
					<span className="flex items-center justify-around p-[0.45em] rounded-[1.7em] transition-[background] duration-[.25] hover:bg-[black]" onClick={() => LogoutFunc()}>
						<VscSignOut className="display-block" />
						<span className='block'>Logout</span>
					</span>
			    </div>
    </div>
  )
}

export default ProfileSettings 