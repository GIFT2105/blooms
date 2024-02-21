"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Gi3DStairs } from "react-icons/gi";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center text-center justify-center w-screen h-screen">
      <div className="flex sm:flex-col md:flex-row xl:flex-row flex-row items-center h-screen w-screen justify-center ">
        <div id="heros" className="flex flex-col rounded-md text-center items-center md:w-screen  xl:w-screen  w-96 h-screen "   >

        </div>
        <div className="flex flex-col rounded-md text-center items-center bg-gray-100     justify-center xl:w-1/2 xl:mr-24  w-auto h-screen ">
          <h1 className="font-newsa text-4xl mt-2 mb-10 font-medium   ">Get Started</h1>
          <Image src="/spring_3506462.png" width={150} height={150} />
          <h2 className="font-newsa   text-base  mb-14 mt-4  "> Take the step and start planning for your future today !!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center h-96 gap-14">
            <div className="flex flex-col items-center h-96 gap-14">

              <div className="flex flex-row gap-2 items-center text-center ">

                <MdOutlineAlternateEmail className="ml-8 text-xl  " />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="  border-b-1 w-72 mr-8 text-center  border-1 border-black rounded-md  "
                />
              </div>

              <div className="flex flex-row gap-2 items-center text-center ">
                <RiLockPasswordLine className="ml-8 text-xl" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className=" bg-white text-black mr-8  border-1 border-black w-72 text-center  rounded-md "
                />
              </div>
              <button className="bg-blue-500 text-white font-bold rounded-sm w-64 h-10 ml-10    cursor-pointer ">
                Login
              </button>

              {error && (
                <div className="bg-red-500 text-white w-auto text-sm  rounded-md mt-2">
                  {error}
                </div>
              )}


            </div>



            <Link className="text-sm font-newsa mt-3 text-center" href={"/register"}>
              Don't have an account? <span className="underline text-blue-500 font-newsas">Register</span>
            </Link>
            <div className="text-sm ml-14 items-center flex flex-col font-newsa mt-3 text-right">
              <h1 >Follow us on </h1>
              <div className="flex  mt-5 flex-row gap-7 h-auto w-auto justify-center ">

                <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-500 mr-2 sm:text-4xl " />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-500 sm:text-4xl    mr-2 " />
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-500 sm:text-4xl   " />
                </a>


              </div>


            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
