import { Search,UserRound,Heart,ShoppingBag,Menu} from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect,useRef} from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { menuData,navLinks } from "./navbarData";
import logo from "../../assets/logo.avif";

export default function Navbar(){

const navigate = useNavigate();
const [activeMenu,setActiveMenu]=useState(null);
const [mobileOpen,setMobileOpen]=useState(false);
const [search,setSearch]=useState("");
const navRef=useRef(null);



/* CLOSE MEGA MENU OUTSIDE CLICK */

useEffect(()=>{
  function handleClick(e){
    if(
      navRef.current &&
      !navRef.current.contains(e.target)
    ){
      setActiveMenu(null);
    }
  }
  document.addEventListener(
    "mousedown",
    handleClick
  );
  
  return()=>{
    document.removeEventListener(
      "mousedown",
      handleClick
    )
  }
},[]);



/* ESCAPE KEY */

useEffect(()=>{


function handleEscape(e){

if(e.key==="Escape"){

setActiveMenu(null);
setMobileOpen(false);

}

}
window.addEventListener(
"keydown",
handleEscape
);


return()=>{

window.removeEventListener(
"keydown",
handleEscape
)

}


},[]);



/* BODY SCROLL LOCK */


useEffect(()=>{


if(mobileOpen){

document.body.style.overflow="hidden";

}

else{

document.body.style.overflow="auto";

}


},[mobileOpen]);


function handleSearch(e){
if(e.key==="Enter" && search.trim()){
navigate(
`/search?q=${search}`
);
setSearch("");

}


}





return(


<header ref={navRef} className=" sticky top-0 z-50 bg-white">

{/* ANNOUNCEMENT */}

<div className="bg-[#ff9673] text-[#000000] text-center text-xs md:text-sm py-2 overflow-hidden">
<p>
Festive Sale - Extra ₹625 off on Orders above ₹2500 + 5% off on Prepaid Orders
</p>
</div>





{/* DESKTOP NAVBAR */}


<div className=" hidden lg:flex items-center justify-between px-8 xl:px-14 h-24   relative">

{/* LOGO */}

<Link
to="/"
className="
flex
items-center
justify-center
"
>

<img
src={logo}
alt="Brand Logo"
className="
w-28
xl:w-36
h-auto
object-contain
"
/>

</Link>





{/* CENTER MENU */}

<nav
className="
flex
gap-7
xl:gap-10
text-sm
font-medium
text-[#0c0c0c]
">


{
navLinks.map(item=>(


<div key={item} onMouseEnter={()=>{
  if(menuData[item]){
    setActiveMenu(item)
  }
  else{
    setActiveMenu(null)
  }
}}
className="
relative
cursor-pointer
">


<Link to={ item==="BEST SELLERS" ? "/collections/best-sellers"
: "#"} className=" hover:text-[#ff9673] transition ">

{item}
</Link>

</div>

))

}
</nav>



{/* RIGHT ACTIONS */}

<div className=" flex items-center gap-5 text-[#000000] ">
<div className=" flex items-center border border-gray-300 px-3 py-2 w-44 ">

<Search size={18} />
  <input value={search} onChange={ 
    e=>setSearch(e.target.value)}
    onKeyDown={handleSearch}
    placeholder="Search"
    className="
    outline-none
    text-sm
    ml-2
    w-full
  "/>
</div>

{/*Account*/}
<Link to="/account">
<UserRound/>
</Link>
<Link to="/wishlist" className=" relative ">
<Heart/>
<span className=" absolute -negative top-[-8px] right-[-10px] bg-[#e06e58] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center ">
0
</span>
</Link>

{/*Cart*/}
<Link to="/cart" className=" relative">
<ShoppingBag/>
<span className=" absolute top-[-8px] right-[-10px] bg-[#d86b55] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
0
</span>
</Link>
</div>




{/* MEGA MENU */}

{
activeMenu &&
 <div onMouseLeave={()=>setActiveMenu(null)} 
    onMouseEnter={()=>setActiveMenu(activeMenu)}
   className="
    absolute
     left-0
     top-full
    w-full
    "
    >
<MegaMenu menu={menuData[activeMenu]} />
</div>
}
</div>







{/* MOBILE HEADER */}

<div
className="
lg:hidden
flex
items-center
justify-between
px-5
h-20
border-b
border-orange-100
"
>


<button
aria-label="menu"
onClick={()=>setMobileOpen(true)}
>
<Menu/>
</button>



<Link
to="/"
className="
flex
items-center
justify-center
"
>
<img
src={logo}
alt="sreeprakash"
className="
w-28
sm:w-32
md:w-36
h-auto
object-contain
"/>
</Link>


<div className=" flex items-center gap-4 ">

{/*SEARCH BAR*/}
<button
onClick={()=>{
  const value = prompt("Search products");
  if(value){
    navigate(`/search?q=${value}`);
  }
}}
aria-label="search"
>
<Search size={22}/>
</button>

{/* Account */}
<Link 
to="/account"
aria-label="account"
>
<UserRound size={22}/>
</Link>


{/* Wishlist */}
<Link 
to="/wishlist"
aria-label="wishlist"
className="relative"
>

<Heart size={22}/>

<span className="
absolute
top-[-8px]
right-[-10px]
bg-[#ff9673]
text-white
text-[10px]
rounded-full
w-5
h-5
flex
items-center
justify-center
">
0
</span>

</Link>


{/* Cart */}
<Link 
to="/cart"
aria-label="cart"
className="relative"
>

<ShoppingBag size={22}/>

<span className="
absolute
top-[-8px]
right-[-10px]
bg-[#ff9673]
text-white
text-[10px]
rounded-full
w-5
h-5
flex
items-center
justify-center
">
0
</span>

</Link>

</div>
</div>

<MobileMenu
open={mobileOpen}
close={()=>setMobileOpen(false)}
/>

</header>


)

}