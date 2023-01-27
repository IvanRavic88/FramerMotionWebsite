import { Footer, Navbar } from "../components";
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Feedback,
  Insight,
} from "../sections";

export default function Page() {
  return (
    <div className="overflow-hidden bg-gray-800">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insight />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
