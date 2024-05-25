import { useNavigate } from 'react-router-dom';
import './Inner.css';
import s from './s.png'
import { CiSearch } from "react-icons/ci";
const Inner = ({data,setSelect})=>{
  const navigate = useNavigate();

 

  function handleClick(id){
    // setSelect(id);
    setSelect(true);
    console.log("hellos");
    navigate(`/item/${id}`);
}
    return(<>
    <div className="container">
        <div className='one_2'>
            <h1 >Social Media For Travellers</h1>
            <div className='input'>
            <CiSearch className='fix'/>
            <input type="text"/>
            </div>
        </div>
        <div className='row'>
          { data.map((element) => (
            <div key={element.id} className='one_1'> 
          
            <img src={element.img} alt="" className='imggg'/>
            
            <div className='details'>
            <div className='o'>
            <h1 className='data'>{element.title.length > 33
                        ? `${element.title.slice(0, 33)}...`
                        : element.title}</h1>
             
             <p>{element.body.length > 150 ? `${element.body.slice(0,150)}` : element.body } <span className='btn' onClick={() => handleClick(element.id)}>Read More...</span></p>
            
            </div>
             <div  className="png"><img src={s} alt="" onClick={() => handleClick(element.id)}/></div> 
             </div>
             
            </div> )
          )}    
        </div>

    </div>
    </>)
}

export default Inner;