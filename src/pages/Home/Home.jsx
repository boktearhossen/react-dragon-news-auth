import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNave from "../shared/RightSideNav/RightSideNave";
import BreakingNews from "./BreakingNews";
import SingleNewscart from "./SingleNewscart";


const Home = () => {
      const news = useLoaderData()
      console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
             <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news cart section */}
                <div className="md:col-span-2 border px-2">
                    <h2 className="text-[#403F3F} text-2xl mb-5 font-semibold">Dragon News Home</h2>
                    {
                        news.map(aNews => <SingleNewscart key={aNews._id} news={aNews}></SingleNewscart> )
                    }
                </div>
                <div className="">
                   <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;