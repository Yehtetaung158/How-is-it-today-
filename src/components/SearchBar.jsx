import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import{Input} from "../components/ui/input"
import { useNavigate } from 'react-router-dom';

const SearchBar = ({add}) => {
    const nav=useNavigate()
    const addbutton=()=>{
        nav("/add")
    }
  return (
        <div className={` bg-secondary flex rounded-lg justify-around py-2
       m-2 ${add && ' w-2/3'}`}>
        {!add && 
        <button  className=" text-white w-1/12 flex items-center text-2xl justify-center">
          <CiSearch />
        </button> 
        }
        <div className=" w-4/5"> 
        <Input className=" text-white text-2xl bg-secondary border-0" placeholder="Enter City Name"/>
        </div>
        {!add && 
        <button onClick={addbutton} className=" text-white w-1/12 text-2xl flex items-center justify-center">
        <IoMenu />
        </button>
        }
      </div>
  )
}

export default SearchBar