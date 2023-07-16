import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/index';
import Clubs from './pages/clubs';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Quora from './pages/quora';
import ProfileForm from './pages/profileform';
import Home from './pages/home';
import DSW from './pages/dsw';
import Postcreate from './pages/postcreate';
import Post from './pages/post';
import Campuslife from "./pages/campuslife";
import Antiragging from "./pages/antiRagging";
import Profile from './pages/profile';
import Page from './pages/page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quora" element={<Quora />} />
        <Route path="/profileform" element={<ProfileForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dsw" element={<DSW />} />
        <Route path="/postcreate" element={<Postcreate />} />
        <Route path="/post" element={<Post />} />
        <Route path="/campuslife" element={<Campuslife />} />
        <Route path="/antiragging" element={<Antiragging />} />
        <Route path="/:page" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
