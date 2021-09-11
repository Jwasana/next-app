
import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridAddIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    SearchIcon

} from "@heroicons/react/outline"

function Header(){
    return(
        <div>
           {/* Left */}
           <div>
               <Image
               src = "https://links.papareact.com/5me"
               width={40}
               height={40}
               layout="fixed"
               />

               <div>

               </div>
           </div>
           {/* Center */}

           {/* Right */}

        </div>
    )
}

export default Header