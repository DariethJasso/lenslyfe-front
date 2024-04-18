import Menu from "../components/menu"
import bg from '../../public/bg.jpg';
import CameraIcon from '@mui/icons-material/Camera';
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="h-screen lg:h-screen bg-gray-200">
        <header className="relative">
        <div className="relative inline-block md:w-screen">
          <img src={bg} alt="" className="max-w-full h-screen object-cover block md:w-screen lg:object-cover"/>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-60"></div>
        </div>

          <Menu />
          <div className="flex flex-col  gap-2 absolute top-[80px] h-[50px] w-[250px] ml-[40px] sm:w-[350px] lg:w-[500px]">
            <p className="text-white text-[25px] font-bold sm:text-[25px] lg:text-[35px]">Explora, Comparte y Conoce</p>
            <p className="text-white text-[15px] sm:text-[15px] lg:text-[20px]">En LensLyfe, puedes compartir tus fotos favoritas con otros expertos y convivir con ellos</p>
            <Link to="/login" className="text-white font-bold bg-gray-400 rounded-lg max-w-[80px]  flex items-center justify-center "><CameraIcon/> Start</Link>
          </div>
        </header>
      </main>
  )
}

export default Welcome