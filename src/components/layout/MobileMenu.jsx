import { X, ChevronRight, ArrowLeft} from "lucide-react";
import { useState,useEffect } from "react";
import { mobileMenuData } from "./MobileMenuData";
import { motion } from "framer-motion";



export default function MobileMenu({ 
open,
close
}){


const [submenu,setSubmenu]=useState(null);


useEffect(()=>{
    if(open){
        document.body.style.overflow="hidden";
    }
    else{
        document.body.style.overflow="auto";
    }
},[open]);


if(!open)
return null;
return(

<div
className="
fixed
inset-0
bg-black/50
z-[100]
"
onClick={close}
>



 <motion.div  initial={{ x:"-100%"}}  animate={{ x:0}} transition={{ duration:.3 }}
 onClick={
 e=>e.stopPropagation()
 }
className="
w-[80vw]
max-w-[320px]
h-full
bg-[#063b38]
p-6
text-[#ff9673]
overflow-y-auto
"
>


<div className="flex justify-between mb-8">

{ 
submenu &&
<button onClick={()=>setSubmenu(null)} >
<ArrowLeft/>
</button>
}

<button onClick={close} >
<X/>
</button>
</div>

{
submenu ?
<>
<h2 className=" uppercase text-lg mb-6">
{submenu}
</h2>

{
mobileMenuData[submenu].map(item=>(

<div key={item}
className="
py-4
border-b
border-white/20
flex
justify-between
text-sm
uppercase"
>

{item}
<ChevronRight size={16}/>
</div>
))}
</>  
:
<>
{
[
"WOMEN",
"MEN",
"BEST SELLERS",
"NAVRATRI STORE",
"PRECIOUS",
"COLLECTIONS",
"WEDDING"
].map(item=>(

<button key={item} onClick={()=>{
    if(mobileMenuData[item]){
        setSubmenu(item)}
    }}
className="
w-full
flex
justify-between
py-4
border-b
border-white/20
uppercase
text-sm
"
>
{item}
{
mobileMenuData[item] &&
<ChevronRight size={16}/>
}
</button>
))

}

<div className=" mt-10 space-y-5 uppercase text-sm">
    <p> My Wish Lists </p>
    <p> My Account </p>
</div>
</>

}


</motion.div>

</div>


)

}