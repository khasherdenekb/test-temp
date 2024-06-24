import { FormControl, FormItem } from "../ui/form";
import { FormFieldWrapper } from "./form-field-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOptions {
  label: string;
  value: string;
}

interface SelectFieldProp {
  name: string;
  label: string;
  description?: string;
  selectDescription: string;
  options: SelectOptions[];
}

export const SelectField = ({
  name,
  label,
  description,
  selectDescription,
  options,
}: SelectFieldProp) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={selectDescription} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option: SelectOptions) => (
              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <SelectItem value={option.value}>{option.label}</SelectItem>
                </FormControl>
              </FormItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </FormFieldWrapper>
  );
};
