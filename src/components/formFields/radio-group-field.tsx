import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormFieldWrapper } from "./form-field-wrapper";
import { FormControl, FormItem, FormLabel } from "../ui/form";

interface RadioGroupOption {
  label: string;
  value: string;
}

interface RadioGroupFieldProps {
  name: string;
  label: string;
  options: RadioGroupOption[];
  description?: string;
}

export const RadioGroupField = ({ name, label, options, description }: RadioGroupFieldProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <RadioGroup
          onValueChange={field.onChange}
          value={field.value}
          className="flex flex-col space-y-1"
        >
          {options.map((option) => (
            <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value={option.value} />
              </FormControl>
              <FormLabel className="font-normal">{option.label}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      )}
    </FormFieldWrapper>
  );
};
