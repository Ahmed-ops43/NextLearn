'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function ProductsDynamic(){

    const pathName = usePathname();
    const searchParams = useSearchParams();

   


    return (
        <div>
            <h1>Products Catch All Route Page {pathName} and searchParams are {searchParams.get('product1')} and {searchParams.get('product2')}</h1>
        </div>
    )
}