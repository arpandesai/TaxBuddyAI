import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <div className="flex items-center justify-center h-[95vh]">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl="/chat-bot"
    />
  </div>
);

export default SignInPage;
