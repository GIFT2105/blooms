import UserInfo from "@/components/UserInfo";
import Nav from "../../components/nav";
import Cards from "../../components/cards";
import Hg from "../../components/content3";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import User from '@/models/user';

export default function Dashboard() {


  return (
    <main className="flex ml-4 flex-col h-screen w-screen">
      <Nav />
      <UserInfo />
      <Cards />

    </main>

  );
}
