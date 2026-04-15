import SignInGithub from "@/features/auth/sign-in/sign-in-github";

const SignInPage = () => {
  return (
    <div className="flex justify-center mt-10 mx-auto w-full max-w-5xl h-full">
      <SignInGithub />
    </div>
  );
};

export default SignInPage;
