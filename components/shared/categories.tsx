'use client'

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
    items: Category[];
    className?: string,
}



export const Categories: React.FC<Props> = ({ items,className }) => {
    const categoryActivId = useCategoryStore((state) => state.activeId);

    return ( 
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {items.map(({name,id}, i) => {
                return (
                    <a href={`/#${name}`}
                        key={i}
                        className={cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActivId === id  && 'bg-white shadow-md shadow-gray-200 text-[#FE5F00]')}>
                        <button>
                            {name}
                        </button>
                    </a>
                )
            })}
        </div>
    )
}