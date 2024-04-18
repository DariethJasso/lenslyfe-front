import Navbar from "./navbar";
import Search from "./search";
import CameraIcon from '@mui/icons-material/Camera';

export default function Menu() {
    return (
        <div className="flex h-[50px] py-1 absolute top-0 gap-1 px-1  justify-between w-full md:justify-evenly">
            <div className="flex items-center text-white">
                <CameraIcon/>
                <p>Lenslyfe</p>
            </div>
            <Search />
            <Navbar />

        </div>
    );
}