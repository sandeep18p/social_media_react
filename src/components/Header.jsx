import { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaBell,FaUser,FaBookmark } from "react-icons/fa";


export const Header = ({select,setSelect}) => {
  const navigate = useNavigate();
  function handlen(){
    console.log(" for ")
    setSelect(false);
    navigate(`/`);
  }
  const [dark, setDark] = useState(true)
  return (
    <>
      <div className='one'>
        <h1 className="he" onClick={()=>{handlen()}}>TravelMedia.in</h1>
        <div className='inside'>
          <div><FaHome color={select ===false ?"#F05A22":"#F9DDCF"}/></div>
          <div><FaBell color="#F9DDCF" /></div>
          <div><FaBookmark className="icon_class"  color={select ===false ?"#F9DDCF":"#F05A22"}/></div>
          <div><FaUser color="#F9DDCF" /></div>
          {/* <div className="dot_class" style={{left:currentPath === "/"?"13.5%":"62%"}}></div> */}
        </div>
      </div>
    </>
  );
}
