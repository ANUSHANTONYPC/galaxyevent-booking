import Image from "next/image";
import image from "./giphy.gif";

export default  function NotFound() {
    return (
        <div className="bg-white dark:bg-dark h-screen flex flex-col gap-12 justify-center items-center duration-300">
<Image src={image} className="max-w-[600px]"  />
        </div>
    )
}