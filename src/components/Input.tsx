import { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  type: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function Input({ title, type, setValue, value }: Props) {
  return (
    <div className="relative">
      <div className="px-2 absolute top-[-12px] left-5 bg-[#fff] rounded">
        <span className="text-[13px] font-semibold text-default">{title}</span>
      </div>
      <input
        type={type}
        className="border border-default rounded px-5 h-10 shadow-md outline-none w-full text-input text-sm"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
