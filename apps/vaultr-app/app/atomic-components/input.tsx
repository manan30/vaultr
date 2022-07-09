type InputProps = {
  name: string;
  value: string;
  label: string;
  changeHandler: (name: string, value: string) => void;
  type?: React.HTMLInputTypeAttribute;
};

export default function Input({
  type = 'text',
  label,
  name,
  value,
  changeHandler
}: InputProps) {
  return (
    <div className='flex flex-col space-y-1'>
      <label className='text-sm font-medium text-primary' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          changeHandler(name, e.currentTarget.value);
        }}
        className='rounded-[0.3rem] border border-solid border-secondary/40 px-2 py-1 text-sm'
      />
    </div>
  );
}
