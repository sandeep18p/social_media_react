import { useNavigate } from "react-router";
import './Inner.css';
import s from './s.png';
import k from './1.png';
import p from './2.png';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const Another = () => {
  const { loading, data, error } = useSelector(state => state.posts);
  const { id } = useParams();
  console.log("here ", id);

  const toshow = data.filter(item => item.id == id);
  console.log(toshow[0], " ", data);

  const navigate = useNavigate();

  function handleClick(id) {
    console.log("coming ", data);
    navigate(`/item/${id}`);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading posts.</p>}
      {!loading && !error && toshow.length > 0 && (
        <>
          
          <div className="container">
          <h1>Post Number {toshow[0].id}</h1>
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
                 
                 <div className="two_btn"><button className="b_1">Details</button><button className="b_2">User Info</button></div>
                 <div className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo tenetur necessitatibus fuga suscipit officia quasi corporis cupiditate, molestiae tempora illo dolores reiciendis qui laboriosam laudantium nostrum quod neque libero.</div>
            
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
