import { Outlet } from "react-router-dom"
import MenuMain from "../../components/mainLayout/MenuMain"
import AsideRight from "../../components/mainLayout/AsideRight"

const BaseMain = () => {
  const pathname = window.location.pathname;
  return (
    <div className="flex flex-col md:flex-row w-[100%]"> 
    
    <MenuMain />
    <Outlet />
    {pathname === '/main' && <AsideRight />}
    </div>
  )
}

export default BaseMain