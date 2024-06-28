import { AuthProvider } from "./contexts/Auth/AuthProvider";
import Router from "./Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
