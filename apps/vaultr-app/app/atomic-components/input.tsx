type InputProps = {
  name: string;
  value: string;
  label: string;
  changeHandler: (name: string, value: string) => void;
  type?: React.HTMLInputTypeAttribute;
};

export default function Input({
  type = "text",
  label,
  name,
  value,
  changeHandler,
}: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-brand font-medium text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          changeHandler(name, e.currentTarget.value);
        }}
        className="px-2 py-1 border border-solid border-secondary/40 text-sm rounded-[0.3rem]"
      />
    </div>
  );
}
