import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins px-4 lg:px-0">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;