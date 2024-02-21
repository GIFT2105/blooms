"use client";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Gi3DStairs } from "react-icons/gi";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImProfile } from "react-icons/im";


export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex flex-row items-center text-center justify-center w-screen h-screen">
      <div className="flex flex-row items-center h-screen w-screen justify-center ">
        <div id="heros" className="flex flex-col rounded-md text-center items-center md:w-screen  xl:w-screen  w-96 h-screen "   >

        </div>
        <div className="flex flex-col rounded-md text-center items-center bg-gray-100     justify-center xl:w-1/2 xl:mr-24  w-auto h-screen ">
          <h1 className="font-newsa text-4xl mt-2 mb-10 font-medium   ">Register</h1>
          <Image src="/spring_3506462.png" width={150} height={150} />
          <h2 className="font-newsa   text-base  mb-14 mt-4  "> Take the step and start planning for your future today !!</h2>


          <form onSubmit={handleSubmit} className="flex flex-col items-center h-96 gap-14">
            <div className="flex flex-col items-center h-96 gap-14">

              <div className="flex flex-row gap-2 items-center text-center ">
                <ImProfile />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="  border-b-1 w-72 mr-8 text-center  border-1 border-black rounded-md  "
                />

              </div>
              <div className="flex flex-row gap-2 items-center text-center ">
                <MdOutlineAlternateEmail className=" text-xl  " />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="  border-b-1 w-72 mr-8 text-center  border-1 border-black rounded-md  "
                />
              </div>

              <div className="flex flex-row gap-2 items-center text-center ">
                <RiLockPasswordLine className=" text-xl" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="  border-b-1 w-72 mr-8 text-center  border-1 border-black rounded-md  "
                />
              </div>

              <button className="bg-green-600 w-64 text-white font-bold cursor-pointer px-6 py-2">
                Register
              </button>

              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}

              <Link className="text-sm mt-3  text-right" href={"/LoginPage"}>
                Already have an account? <span className="underline text-blue-500 font-semibold">Login</span>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
