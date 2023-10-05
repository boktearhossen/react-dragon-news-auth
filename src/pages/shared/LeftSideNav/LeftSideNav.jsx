import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const LeftSideNav = () => {
    const [categoris, setCategories] =useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h2 className="text-[#403F3F} text-2xl mb-5 font-semibold"> All Categoryes  </h2>
            <div className="space-y-4">
            {
                categoris.map(category => <NavLink
                    className="block text-[#9F9F9F] text-lg font-medium "
                    key={category.id}
                    to={`/category${category.id}`}
                    >
                    {category.name}
                    </NavLink>)
            }
            </div>
        </div>
    );
};


export default LeftSideNav;