'use client'
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import React from "react";
import { useCategoryStore } from "@/store/category";
import { useIntersection } from 'react-use';
import { stat } from "fs";

interface Props {
    title: string;
    items: any[];
    listClassName?: string;
    className?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    listClassName,
    categoryId,
    className
}) => {

    const setActiveCategory = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = React.useRef(null);

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });



    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategory(categoryId);
        }
    }, [intersection, setActiveCategory, categoryId]);
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                        />
                    )
                })}
            </div>
        </div>
    )
}