import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'


import {getCompanies} from "../../../redux/company/companyTypeSlice"




export default function SelectCompany() {
  const companies=useSelector(state=>state.companies.companies) 
  const dispatch=useDispatch()
  const [companyName, setCompany] = React.useState([]);

  
  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  useEffect(()=>{
      dispatch(getCompanies(companyName))
  },[dispatch,companyName])

  return (
    <div className='w-[100%] relative block'>
      
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={companyName}
          className="w-full p-3 appearance-none"
          onChange={handleChange}
        >
           <option disabled value="" className='p-3'>
            <em>What type of company</em>
          </option>
          {companies.map((name) => (
            <option
              className='p-3'
              key={name.name}
              value={name.name}
            >
              {name.name}
            </option>
          ))}
        </select>
      </FormControl>
    </Box>
    </div>
  );
}