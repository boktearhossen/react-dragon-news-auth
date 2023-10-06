import { Link } from "react-router-dom";

const SingleNewscart = ({ news }) => {
  const {_id, title, thumbnail_url,image_url,details } = news;
  return (


    <div className="mt-7">
       <h2 className="card-title">{title}</h2>
          <div className="">
           <img src={image_url} alt="" className="rounded-xl"/>
          </div>
        <div className=" ">
            <p className="mt-4">{details.slice(0,200)} <Link className="font-bold text-[#FF8C47]" to={`/news/${_id}`}>See More....</Link> </p>
         
          
          
        </div>
    </div>
    
  );
};

export default SingleNewscart;
