import { Dispatch, SetStateAction, useState } from "react"
import { IoArrowBackOutline } from "react-icons/io5";

import Input from "./Input";

type Props = {
    setIsAddingDiscipline: Dispatch<SetStateAction<boolean>>;
}

export default function AddDiscipline({ setIsAddingDiscipline }: Props) {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');

  return (
    <div className="flex flex-col gap-6">
        <button 
            className="flex items-center gap-2 text-subtitle text-sm" 
            onClick={() => setIsAddingDiscipline(false)}
        >
            <IoArrowBackOutline /> Voltar para o Início
        </button>

        <div className="flex items-center gap-2">
            <span className="text-[13px] whitespace-nowrap text-disable font-semibold">Adicionar disciplina</span>
            <div className="bg-disable w-full h-[1px]"/>
        </div>

        <Input 
            title="Disciplina" 
            type="text"
            setValue={setName}
            value={name}
        />

        <Input 
            title="Período" 
            type="number"
            setValue={setPeriod}
            value={period}
        />
    </div>
  )
}
