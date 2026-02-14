import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Appointment from "./components/Appointment/Appointment";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import WhyUs from "./components/WhyUs/BenefitItems";
import CallbackForm from "./components/CallbackForm/CallbackForm";
import Footer from "./components/Footer/Footer";

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
        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
}
