import type { PromptField } from "@/lib/workbookTypes";
import TextField from "./TextField";
import TextAreaField from "./TextAreaField";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";

interface PromptRendererProps {
  field: PromptField;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

export default function PromptRenderer({
  field,
  value,
  onChange,
}: PromptRendererProps) {
  switch (field.type) {
    case "text":
      return (
        <TextField
          id={field.id}
          label={field.label}
          value={value as string}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      );

    case "textarea":
      return (
        <TextAreaField
          id={field.id}
          label={field.label}
          value={value as string}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      );

    case "checkboxGroup":
      return (
        <CheckboxGroup
          id={field.id}
          label={field.label}
          options={field.options ?? []}
          selected={value as string[]}
          onChange={onChange}
        />
      );

    case "radioGroup":
      return (
        <RadioGroup
          id={field.id}
          label={field.label}
          options={field.options ?? []}
          selected={value as string}
          onChange={(v) => onChange(v)}
        />
      );

    case "url":
    case "imageUpload":
    case "videoUpload":
    case "audioUpload":
      return (
        <p className="text-base text-gray-400 italic">
          Field type not yet implemented.
        </p>
      );

    default:
      return (
        <p className="text-base text-gray-400 italic">
          Field type not yet implemented.
        </p>
      );
  }
}
