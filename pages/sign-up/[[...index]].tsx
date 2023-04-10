import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => (
  <div className="flex items-center justify-center h-[95vh]">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/chat-bot" />
  </div>
);

export default SignUpPage;
