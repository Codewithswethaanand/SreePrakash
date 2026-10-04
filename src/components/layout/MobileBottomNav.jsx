import {
User,
Home,
Search,
Star,
ShoppingBag,
MessageCircle
}
from "lucide-react";


import {
NavLink
}
from "react-router-dom";



const menu=[

{
name:"Account",
path:"/account",
icon:<User/>
},

{
name:"Home",
path:"/",
icon:<Home/>
},

{
name:"Search",
path:"/search",
icon:<Search/>
},

{
name:"Reviews",
path:"/reviews",
icon:<Star/>
},

{
name:"Cart",
path:"/cart",
icon:<ShoppingBag/>
},

{
name:"Chat",
path:"#",
icon:<MessageCircle/>
}

];



export default function MobileBottomNav(){


return(

<nav
className="
fixed
bottom-0
left-0
right-0
h-16
bg-white
border-t
z-50
pb-[env(safe-area-inset-bottom)]
lg:hidden
"
>


<div
className="
grid
grid-cols-6
h-full
"
>


{

menu.map(item=>(


<NavLink

key={item.name}

to={item.path}

className={({isActive})=>

`
flex
flex-col
items-center
justify-center
text-[10px]

${isActive
?
"text-[#ff9673]"
:
"text-[#000000]"
}

`

}

>


{item.icon}


<span>
{item.name}
</span>


</NavLink>


))


}


</div>


</nav>


)


}