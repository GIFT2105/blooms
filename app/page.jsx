import Image from "next/image";
import Hero from "../components/hero";
import Content1 from "../components/content1";
import Content2 from "../components/content2";   //FROM HERE UPWARDS ,THESE ARE YOUR IMPORTS NOT THE AUTH ONES //
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Nav from "../components/nav";



export default async function Home() {

  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");



  return (
    <main className="flex h-screen w-screen flex-col ">

      {/* Top NAV LIKE SECTION  */}

      <Nav />
      {/* hERO SECTION */}

      <Hero />

      {/* CONTENT 1 */}
      <Content1 />

      {/* CONTENT 2 */}
      <Content2 />


      <p className='text-xs  '>
        Disclaimer: Please note that this is a beta demonstration project, and the information provided does not constitute professional career guidance. While our app aims to educate and offer guidelines on various careers, it is essential to consult with career advisors or experts for personalized advice before making any significant career decisions. We provide general information for educational purposes only and recommend seeking professional guidance for tailored career planning.
      </p>

    </main>
  );
}
