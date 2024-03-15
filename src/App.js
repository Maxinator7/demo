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
import SignupModal from "./Components/SignupModal/SignupModal"
import LoginModal from "./Components/LoginModal/LoginModal"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
                <Signup />
              </>
            }
          />
             <Route
            path="SignupModal"
            element={
              <>
                <Navbar />
                <SignupModal />
              </>
            }
          />
          <Route
            path="login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
             <Route
            path="loginModal"
            element={
              <>
                <Navbar />
                <LoginModal />
              </>
            }
          />
          <Route
            path="joinMeetup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="Esignup"
            element={
              <>
                <Navbar />
                <EmailSignup />
              </>
            }
          />
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
