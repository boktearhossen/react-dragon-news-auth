import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 mt-5">
            <button className="btn btn-secondary ">Latest</button>
            <Marquee speed={80} className="text-[#403F3F] font-semibold text-lg">
              Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.........
           </Marquee>
        </div>
    );
};

export default BreakingNews;