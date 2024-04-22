import Hostories from "../components/main/Hostories"
import Post from "../components/post"

const Main = () => {

  
  return (
    <div className="w-[100%] xl:w-[50%] h-full bg-black">
      <Hostories />
      <div className="flex sm:justify-center flex-col">
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Main