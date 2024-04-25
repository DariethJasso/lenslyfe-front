import DrawerNewPost from "@/components/main/DrawerNewPost"
import Hostories from "../components/main/Hostories"
import SectionPosts from "@/components/main/sectionPosts"


const Main = () => {


  
  return (
    <div className="w-[100%] xl:w-[50%] h-full bg-black">
      <Hostories />
      <div className="flex sm:justify-center flex-col">
        <SectionPosts />
      </div>
    </div>
  )
}

export default Main