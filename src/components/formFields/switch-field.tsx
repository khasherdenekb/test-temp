import { Switch } from "@/components/ui/switch";
import { FormFieldWrapper } from "./form-field-wrapper";

interface SwitchFieldProps {
  name: string;
  label: string;
  description?: string;
}

export const SwitchField = ({ name, label, description }: SwitchFieldProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <div>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
        </div>
      )}
    </FormFieldWrapper>
  );
};
