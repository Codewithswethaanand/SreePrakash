import {motion} from "framer-motion";
import {Link} from "react-router-dom";


export default function MegaMenu({menu}){


if(!menu) return null;


return(

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

className="
absolute
left-0
top-full
w-full
bg-[#ff9673]
border-t
border-orange-100
z-50
"

>


<div
className="
max-w-[1400px]
mx-auto
grid
grid-cols-5
gap-10
px-10
py-10
"
>


{
menu.columns.map((column,index)=>(

<div key={index}>


<h3
className="
text-[#000000]
font-semibold
text-sm
tracking-widest
mb-5
"
>
{column.title}
</h3>


<ul className="space-y-3">


{
column.items.map(item=>(

<li key={item}>


<Link

to={`/collections/${item
.toLowerCase()
.replaceAll(" ","-")}`}

className="
text-sm
text-[#000000]
hover:text-[#ff9673]
transition
"

>

{item}

</Link>


</li>


))
}


</ul>


</div>

))
}


</div>


</motion.div>


)

}