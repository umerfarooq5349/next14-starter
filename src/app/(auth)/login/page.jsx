import { signIn } from "@/lib/auth";

const LoginPage = () => {

  const handleGithubLogIn = async () => {
    'use server'
    await signIn("github.com",);
  };
  return (<div>

    <form action={handleGithubLogIn}>
      <button>Login with github</button>
    </form>
  </div>);
};

export default LoginPage;