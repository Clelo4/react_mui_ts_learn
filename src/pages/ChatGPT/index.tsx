import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';

export default function ChatGPT() {
  const navigate = useNavigate();
  return (
    <div>
      <Link href="/signin">signin</Link>
      <Button
        onClick={() => {
          navigate('/signin');
        }}
      >
        navigate signin
      </Button>
      <Button
        onClick={() => {
          navigate('/account');
        }}
      >
        navigate account
      </Button>
      <ReactMarkdown>123</ReactMarkdown>
    </div>
  );
}
