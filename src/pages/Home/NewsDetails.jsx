import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNave from "../shared/RightSideNav/RightSideNave";


const NewsDetails = () => {
    const {id} =  useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-6">
                <div className="col-span-3">
                    <h2 className="text-2xl font-bold">News Details</h2>
                    {id}
                </div>


                <div className="col-span-1"> 
                <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;