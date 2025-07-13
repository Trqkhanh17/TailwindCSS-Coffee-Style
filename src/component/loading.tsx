import logo from "../assets/logo.png"
const Loading = () => {
    return (
        <div className="font-Karla min-h-screen w-full flex justify-center items-center bg-white text-coffee-600 text-7xl gap-2">
            <img src={logo} alt="logo" className="max-w-20" /> Loading...
        </div>
    );
};
export default Loading;
