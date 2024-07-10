import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import AddDiscipline from "./AddDiscipline";

export default function Sidebar() {
  const [isAddingDiscipline, setIsAddingDiscipline] = useState(false);

  return (
    <div className="p-5 sm:w-[400px]">
      {isAddingDiscipline ? (
        <AddDiscipline setIsAddingDiscipline={setIsAddingDiscipline} />
      ) : (
        <div className="w-full flex gap-5 text-[#fff]">
          <button
            className="bg-default h-10 w-full rounded flex items-center justify-center text-sm shadow-md"
            onClick={() => setIsAddingDiscipline(true)}
          >
            Adicionar Disciplina
          </button>
          <button className="bg-default h-10 w-12 rounded flex items-center justify-center shadow-md">
            <FiDownload />
          </button>
        </div>
      )}
    </div>
  );
}
