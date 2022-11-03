import About from "../components/About";
import ClientSay from "../components/ClientSay";
import Hero from "../components/Hero";
import Service from "../components/Service";
import styles from "../styles/Home.module.css";
import FAQ from "../components/Faq";

export default function Home() {
  return (
    <div >
      <Hero />
      <Service />
      <About />
      <ClientSay />
      <FAQ />

    </div>
  );
}
