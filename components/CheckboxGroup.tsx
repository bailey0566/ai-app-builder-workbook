interface CheckboxGroupProps {
  id: string;
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function CheckboxGroup({
  id,
  label,
  options,
  selected,
  onChange,
}: CheckboxGroupProps) {
  function handleToggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <fieldset>
      <legend className="mb-3 text-lg font-semibold text-gray-800">
        {label}
      </legend>
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const optionId = `${id}-${option.toLowerCase().replace(/\s+/g, "-")}`;
          const isChecked = selected.includes(option);
          return (
            <label
              key={option}
              htmlFor={optionId}
              className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-3 text-lg transition ${
                isChecked
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-300 bg-white text-gray-800 hover:border-blue-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                id={optionId}
                name={id}
                value={option}
                checked={isChecked}
                onChange={() => handleToggle(option)}
                className="h-5 w-5 shrink-0 accent-blue-500"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
