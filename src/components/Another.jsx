import { useNavigate } from "react-router";
import './Inner.css';
import s from './s.png';
import k from './1.png';
import p from './2.png';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from "react";

const Another = () => {
  const { loading, data, error } = useSelector(state => state.posts);
  const { id } = useParams();
  console.log("here ", id);
  const [flow,setFlow] =useState(null);

  const toshow = data.filter(item => item.id == id);
  console.log(toshow);

  const navigate = useNavigate();

  const scrollToTop = () => {
    console.log('ji ha')
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function change(){
     let n=`Post Was Posted By ${toshow[0].id}`
     setFlow(n)
  }
  function dchange(){
    
    setFlow(toshow[0].body)
 }
  function handleClick(id) {
    // console.log("coming ", data);
    const op=data.filter(item => item.id == id);
    setFlow(op[0].body)
    scrollToTop(); 
    navigate(`/item/${id}`);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading posts.</p>}
      {!loading && !error && toshow.length > 0 && (
        <>
          
          <div className="container">
          <h1 className="jack">Post Number {toshow[0].id}</h1>
            <div className='one_1_1'>
              <div  className="imggg_1">
              <img src={toshow[0].img} alt="" className='imggg_1' />
              <div className="pos"><div className="imgco">{toshow[0].title.slice(0, 20)}...</div> <div className="imgcon">
                <img src={k} alt="" />
                <img src={p} alt="" />
                </div>
                </div>
              </div>
              <div className="two_2_2">
                 
                 <div className="two_btn"><button className={(flow===null || flow== toshow[0].body) ? 'b_1' : 'b_2' } onClick={dchange}>Details</button>
                 <button className={(flow===null || flow== toshow[0].body) ? 'b_2' : 'b_1' } onClick={change}>User Info</button></div>
                { flow!=null? <div className="lorem">{flow}</div> : <div className="lorem">{toshow[0].body}</div>}
            
              </div>
            </div>
          </div>
        </>
      )}
      <div className="container">
        <div className='row'>
          {data.map((element) => (
            <div key={element.id} className='one_1'>
              <img src={element.img} alt="" className='imggg' />
              <div className='details'>
                <div className='o'>
                  <h1 className='data'>
                    {element.title.length > 33 ? `${element.title.slice(0, 33)}...` : element.title}
                  </h1>
                  <p>
                    {element.body.length > 150 ? `${element.body.slice(0, 150)}` : element.body}
                    <span className='btn' onClick={() => handleClick(element.id)}>Read More...</span>
                  </p>
                </div>
                <div className="png">
                  <img src={s} alt="" onClick={() => handleClick(element.id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Another;
