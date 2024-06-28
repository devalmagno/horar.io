import { useAuthContext } from "../contexts/Auth/useAuthContext";

export default function Login() {
  const { login } = useAuthContext();

  return (
    <div className="h-screen flex flex-col justify-around items-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <img src="./logo.png" alt="HORARIO" className="w-52"/>
        <p className="font-bold text-[12px]">Sistema de Gestão de Horários</p>
        <p className="text-[12px]">Coordenação de Engenharia Civil</p>
      </div>

      <button 
      className="flex gap-1 items-center text-[12px] border-2 border-default py-2 px-5 rounded transition ease-in-out delay-300 hover:scale-105"
      onClick={login}
      >
        Entrar pelo
        <strong>Google</strong>
        <img src="./google_icon.png" alt="google" className="h-6 w-6 object-cover"/>
      </button>
    </div>
  );
}
