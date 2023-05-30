import Image from 'next/image';
import home from '@/public/assets/home4.png';
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '@/components/buttons.component';
export default function Home() {
  return (
    <section className="flex  justify-center items-center w-10/12  mx-auto min-h-screen ">
      <div className="flex w-full mt-4 flex-col text-start gap-5">
        <h1 className="head_text orange_gradient ">
          Empowering Students, Simplifying Teaching
        </h1>
        <h2 className="desc red_gradient text-start">
          Welcome to the future of student management. Simplify your academic
          journey with our intuitive and user-friendly platform.
        </h2>
        <h3 className="my-4 w-1/2 text-center py-2 border blue_gradient border-blue-500 rounded-full ">
          Start Your Journey Today
        </h3>
      </div>
      <div className="mt-4 h-80 w-full relative">
        <Image src={home} alt="home" fill />
      </div>
    </section>
  );
}
