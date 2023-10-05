import logo from "../../../assets/logo.png"
import moment from 'moment';
//date use form   ==>>moment js


const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mt-3" src={logo} alt="" />
            <p className="text-[#706F6F] text-lg font-normal mt-2">Journalism Without Fear or Favour</p>
            {/* date use form   ==>>moment js */}
            <p className="text-xl text-[#706F6F] font-medium"> {moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;