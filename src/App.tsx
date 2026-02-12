// import Footer from "./components/Footer/Footer";
import Appointment from "./components/Appointment/Appointment";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import WhyUs from "./components/WhyUs/benefitsItem";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Appointment />
        <Feedbacks />
        <WhyUs />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
