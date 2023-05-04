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
import SearchResults from "./Components/SearchResults/SearchResults";
import EmailSignup from "./Components/EmailSignup/EmailSignup";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import EventDetails from "./Components/EventDetails/EventDetails";
import GroupDetails from "./Components/GroupDetails/GroupDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Navbar />   */}
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
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
          <Route path="searchresults" element={<SearchResults />} />
          <Route
            path="Signup"
            element={
              <>
                <Navbar />
                <EmailSignup />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="joinMeetup" element={<Signup />} />
          <Route
            path="EventDetails"
            element={
              <>
                <Navbar />
                <EventDetails />
              </>
            }
          />
          <Route
            path="GroupDetails"
            element={
              <>
                <Navbar />
                <GroupDetails />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
