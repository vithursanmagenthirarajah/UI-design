import "./App.css";
import "./Contacts.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//components
import Profile from "./components/profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publish from "./components/Publish";

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
    <AppContainer>
      <Profile />
    </AppContainer>
  );
}

export default App;
