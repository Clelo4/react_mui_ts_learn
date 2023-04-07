import { Button, Link } from "@mui/material";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return  (
    <div>
      <Link href="/signin">signin</Link>
      <Button onClick={() => { navigate('/signin'); }}>navigate signin</Button>
      <Button onClick={() => { navigate('/account'); }}>navigate account</Button>
    </div>
  );
}
