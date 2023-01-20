import { Footer, Navbar } from "../components";
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Feedback,
} from "../sections";

export default function Page() {
  return (
    <div className="bg-gray-800 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Feedback />
      <Footer />
    </div>
  );
}
