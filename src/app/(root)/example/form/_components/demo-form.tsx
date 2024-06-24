"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema } from "./demo-values";
import { InputField } from "@/components/formFields/input-field";
import { SwitchField } from "@/components/formFields/switch-field";
import { DatePickerField } from "@/components/formFields/date-picker-field";
import { RadioGroupField } from "@/components/formFields/radio-group-field";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DateRangePickerField } from "@/components/formFields/date-range-picker-field";
import { SelectField } from "@/components/formFields/select-field";

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // ! ACTIONS IS HERE
    console.log(values);
  };

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          name="username"
          label="Username"
          placeholder="username"
          description="Receive emails about your account security."
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          description="Receive emails about your account security."
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          description="Receive emails about your account security."
        />
        <SwitchField
          name="securityEmails"
          label="Security emails"
          description="Receive emails about your account security."
        />
        <DatePickerField
          name="dateOfBirth"
          label="Date of birth"
          description="Your date of birth is used to calculate your age."
        />
        <DateRangePickerField
          name="dateRange"
          label="Date Range"
          description="Select a date range."
        />
        <RadioGroupField
          name="notify"
          label="Notify me about"
          description="Select a notify."
          options={[
            { label: "All new messages", value: "all" },
            { label: "Direct messages and mentions", value: "dm" },
            { label: "Nothing", value: "none" },
          ]}
        />
        <SelectField
          name="selectMe"
          label="Select me about"
          description="Select a select."
          selectDescription={"Салбар сонгох"}
          options={[
            { label: "Branch 1", value: "branch1" },
            { label: "Branch 2", value: "branch2" },
            { label: "Branch 3", value: "branch3" },
          ]}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
