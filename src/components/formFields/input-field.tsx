import { Input } from "@/components/ui/input";
import { FormFieldWrapper } from "./form-field-wrapper";
import { createElement, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
}

export const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  description,
}: InputFieldProps) => {
  const checkType = type === "password" ? false : true;
  const [passwordVisibility, setPasswordVisibility] = useState(checkType);
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <div className="relative">
          <Input
            {...field}
            type={passwordVisibility ? "text" : "password"}
            autoComplete="on"
            placeholder={placeholder}
          />
          {type === "password" && (
            <div
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </div>
          )}
        </div>
      )}
    </FormFieldWrapper>
  );
};
