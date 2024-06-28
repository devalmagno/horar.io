import { useAuthContext } from "../contexts/Auth/useAuthContext";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const { authUser, logout } = useAuthContext();

  return (
    <div className="flex items-center justify-between py-4 px-5 sm:px-6">
      <img src="./logo.png" alt="Horario" className="w-28" />
      <div className="flex items-center gap-2">
        <span>
          Logado como{" "}
          <strong>
            {authUser && authUser.displayName ? authUser.displayName : ""}
          </strong>
        </span>
        <button onClick={logout}>
          <FiLogOut />
        </button>
      </div>
    </div>
  );
}
