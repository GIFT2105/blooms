import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from "../../components/nav";


export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");


  return (
    <main className="flex flex-col h-screen w-screen  ">
      <Nav />
      <div className="  flex flex-row text-center items-center justify-center  w-full   h-auto ">

        <div className="mb-64 flex flex-col gap-8 ml-5  text-3xl  justify-around    w-3.5 h-3.5">

          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 mr-2 sm:text-xl     animate-bounce" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-500 sm:text-xl    mr-2 animate-bounce" />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-500 sm:text-xl   animate-bounce" />
          </a>

        </div>

        <div>
          <LoginForm />
        </div>


      </div>





    </main>
  );
}


