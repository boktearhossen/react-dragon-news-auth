import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNave from "../shared/RightSideNav/RightSideNave";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
             <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2>Content comming soon</h2>
                </div>
                <div className="">
                   <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;