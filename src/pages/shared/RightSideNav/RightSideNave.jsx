import { FaGoogle,FaGithub, FaFacebook, FaTwitter,FaInstagram} from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNave = () => {
    return (
        <div>
            {/* login with */}
         <div className="">
            <h2 className="text-[#403F3F} text-2xl font-semibold"> Login With</h2>
            <button className="btn w-full btn-outline mt-3">
            <FaGoogle></FaGoogle>
             Login With Google
          </button>
            <button className="btn w-full btn-outline mt-3">
            <FaGithub></FaGithub>
            Login With GitHub
          </button>
        </div>
         {/* find us */}
         <div className=" mt-10">
            <h2 className="text-[#403F3F} text-2xl font-semibold"> Find Us On</h2>
             <a className='flex mt-3 border-2 py-3 px-5 items-center' href=''>
                <FaFacebook className='mr-3 text-2xl '></FaFacebook>
               <span className='text-[#706F6F] text-base font-medium'>Facebook</span>
             </a>
             <a className='flex  border-x-2 py-3 px-5 items-center' href=''>
                <FaTwitter className='mr-3 text-2xl '></FaTwitter>
               <span className='text-[#706F6F] text-base font-medium'>Twiter</span>
             </a>
             <a className='flex border-2 py-3 px-5 items-center' href=''>
                <FaInstagram className='mr-3 text-2xl '></FaInstagram>
               <span className='text-[#706F6F] text-base font-medium'>InstaGgram</span>
             </a>
        </div>
       {/* qZone */}
       <div className=" mt-10">
            <h2 className="text-[#403F3F} text-2xl mb-3 font-semibold"> q Zone</h2>
             <img src={qZone1} alt="" />
             <img src={qZone2} alt="" />
             <img src={qZone3} alt="" />
        </div>

        </div>

        
    );
};

export default RightSideNave;