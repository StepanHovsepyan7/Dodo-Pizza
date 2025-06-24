'use client';

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

export const RangeSlider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (
    { className, min, max, step, value, onValueChange, ...props },
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    React.useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <div className="w-full space-y-2">
        {/* Display current values */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>{localValues[0]}</span>
          <span>{localValues[1]}</span>
        </div>

        {/* Slider */}
        <SliderPrimitive.Root
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={localValues}
          onValueChange={handleValueChange}
          className={cn(
            'relative flex w-full touch-none select-none items-center',
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute h-full bg-[#FE5F00]" />
          </SliderPrimitive.Track>
          
          {/* Thumb for min value */}
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#FE5F00] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
          
          {/* Thumb for max value */}
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#FE5F00] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>

        {/* Display min/max range */}
        <div className="flex justify-between text-xs text-gray-400">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';