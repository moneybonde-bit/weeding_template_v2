import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGuestName } from "./hooks/useGuestName";
import { useMusic } from "./hooks/useMusic";
import config from "./data/weddingConfig";

import Cover from "./components/Cover";
import Couple from "./components/Couple";
import CouplePhoto from "./components/CouplePhoto";
import OurPrayer from "./components/OurPrayer";
import LoveStory from "./components/LoveStory";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Rsvp from "./components/Rsvp";
import Wishes from "./components/Wishes";
import DigitalEnvelope from "./components/DigitalEnvelope";
import Scripture from "./components/Scripture";
import Footer from "./components/Footer";
import MusicButton from "./components/MusicButton";
import BottomNav from "./components/BottomNav";
import LinkGenerator from "./components/LinkGenerator";

const isAdmin = new URLSearchParams(window.location.search).get("admin") === "1";

export default function App() {
  const [opened, setOpened] = useState(false);
  const guestName = useGuestName();
  const { playing, init, toggle } = useMusic(config.musicUrl);

  function handleOpen() {
    setOpened(true);
    init();
  }

  if (isAdmin) return <LinkGenerator />;

  return (
    <>
      <AnimatePresence>
        {!opened && (
          <Cover key="cover" guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {opened && (
        <>
          <MusicButton playing={playing} onToggle={toggle} />

          <motion.main
            className="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Couple />
            <CouplePhoto />
            <OurPrayer />
            <LoveStory />
            <Events />
            <Scripture />
            <Gallery />
            <Location />
            <Rsvp guestName={guestName} />
            <Wishes guestName={guestName} />
            <DigitalEnvelope />
            <Footer />
          </motion.main>

          <BottomNav />
        </>
      )}
    </>
  );
}
