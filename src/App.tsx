// import Footer from "./components/Footer/Footer";
import Appointment from "./components/Appointment/Appointment";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      {/* <Footer /> */}
    </div>
  );
}
