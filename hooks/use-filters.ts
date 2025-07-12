import { useSearchParams, useRouter } from "next/navigation";

import { useSet } from "react-use";
import React from "react";
import { ingredients } from "@/prisma/constants";



interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string[];
    sizes: string;
    ingredients: string[];
}

export interface Filters{
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
} 

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = ():ReturnProps => {
    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    // filter ingredients
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(','))
    );

    // filter sizes 
    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
    );


    // filter pizza types
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
    );


    // filter prices
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    })


    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))



    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices(prev =>({
            ...prev,
            [name]: value,
        }))
    }



    return {
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients
    };

}