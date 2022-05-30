import "./App.css";
import "./Contacts.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";


//components
import Profile from "./components/profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publish from "./components/Publish";
import EmploymentApplication from "./components/EmploymentApplication";



const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    
   <Router>
     
      <Routes>
          <Route path="/"  element={<Profile/>}/>
          <Route path="/education"  element={<Education/>}/>
          <Route path="/experience"  element={<Experience/>}/>
          <Route path="/publish"  element={<Publish/>}/>
          <Route path="/application"  element={<EmploymentApplication/>}/>
      </Routes>
      
   </Router>
   
  );
}

export default App;
