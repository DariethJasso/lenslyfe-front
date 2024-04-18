import ButtonIcon from "../components/buttonBack";
import FormRegister from "../components/formRegister";
import lago from "../../public/lago-otono.jpg";


 

export default function LoginPage() {
    

    return (
        <div className='flex h-screen' >
            <ButtonIcon />
            <img className='object-cover w-[100%] lg:w-[50%]' src={lago} alt="" />
            <div className=' bg-white p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-3/4 border border-gray-300'>
                <FormRegister />
            </div>
        </div>
    )
}