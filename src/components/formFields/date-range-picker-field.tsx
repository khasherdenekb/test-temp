import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FormFieldWrapper } from "./form-field-wrapper";

interface DateRangePickerFieldProps {
  name: string;
  label: string;
  className?: string;
  description?: string;
  defaultValue?: DateRange;
}

export const DateRangePickerField = ({
  name,
  label,
  className,
  description,
  defaultValue = {
    from: undefined,
    to: undefined,
  },
}: DateRangePickerFieldProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {({ value, onChange }) => (
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !value && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value?.from ? (
                  value.to ? (
                    <>
                      {format(value.from, "LLL dd, y")} - {format(value.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(value.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={value?.from || defaultValue.from}
                selected={value || defaultValue}
                onSelect={onChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    </FormFieldWrapper>
  );
};
