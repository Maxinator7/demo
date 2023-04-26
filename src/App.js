import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import StoriesTab from "./Components/StoriesTab/StoriesTab";
import EventsSearch from "./Components/EventsSearch/EventsSearch";
import About from "./Components/About/About";
import UpcommingEvents from "./Components/UpcommingEvents/UpcommingEvents";
import PopularGroups from "./Components/PopularGroups/PopularGroups";
import StoreAdvertise from "./Components/StoreAdvertise/StoreAdvertise";
import MeetupStories from "./Components/MeetupStories/MeetupStories";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <StoriesTab />
      <EventsSearch />
      <About />
      <button className="joinMeetupButton">join Meetup</button>
      <UpcommingEvents />
      <PopularGroups />
      <StoreAdvertise />
      <MeetupStories />
      <Footer />
    </div>
  );
}

export default App;
