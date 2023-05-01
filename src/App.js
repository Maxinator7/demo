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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResuts from "./Components/SearchResults/SearchResuts";
import EmailSignup from "./Components/EmailSignup/EmailSignup"
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <StoriesTab />
                <EventsSearch />
                <About />
                <UpcommingEvents />
                <PopularGroups />
                <StoreAdvertise />
                <MeetupStories />
              </>
            }
          />
          <Route path="searchresults" element={<SearchResuts />} />
          <Route path="Signup" element={<EmailSignup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
