import { FiDownload } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="py-5 sm:w-[400px]">
      <div className="w-full flex px-5 gap-5 text-[#fff]">
        <button className="bg-default h-10 w-full rounded flex items-center justify-center text-sm shadow-md">Adicionar Disciplina</button>
        <button className="bg-default h-10 w-12 rounded flex items-center justify-center shadow-md">
          <FiDownload />
        </button>
      </div>
    </div>
  );
}
