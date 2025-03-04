'use client'
import React from "react";
import Link from 'next/link';
import { usePathname, useSearchParams} from 'next/navigation'
 

const Sidebar=()=>{
    const pathname = usePathname();
    console.log("en consola path: "+pathname);
    const searchParams = useSearchParams();
    console.log("en consola params: "+searchParams);

    return(
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2xl font-black">CRM Clientes</p>
            </div>
            <nav className="mt-5 list-none">
                <li className = {pathname==="/" ? "bg-blue-800 p-3":"p-3 text-white mb-2 block" } >
                    <Link href="/">
                        Inicio
                    </Link>
                </li>

                <li className = {pathname==="/productos" ? "bg-blue-800 p-3":"p-3 text-white mb-2 block" } >
                    <Link href="productos">
                        Productos
                    </Link>
                </li>
            
                <li className = {pathname==="/pedidos" ? "bg-blue-800 p-3":"p-3 text-white mb-2 block" } >
                    <Link href="pedidos">Pedidos
                    </Link>
                </li>

                <li className = {pathname==="/clientes" ? "bg-blue-800 p-3":"p-3 text-white mb-2 block" } >
                    <Link href="clientes">Clientes
                    </Link>
                </li>

                <li className = {pathname==="/nosotros" ? "bg-blue-800 p-3":"p-3 text-white mb-2 block" } >
                    <Link href="nosotros">Nosotros
                    </Link>
                </li>    
            </nav>
            
            
            
        </aside>
    );
};
export default Sidebar;