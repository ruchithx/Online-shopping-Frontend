// components/AuthButton.tsx
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthButton: React.FC = () => {
  const { data: session } = useSession(); // Correctly typed from next-auth
  console.log(session?.user?.id);
  console.log(session?.roles[0]);
  console.log(session);
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()} style={buttonStyle}>
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn()} style={buttonStyle}>
          Sign In
        </button>
      )}
    </div>
  );
};
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AuthButton;
