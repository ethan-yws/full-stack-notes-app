import styled from "styled-components";
import MarkdownEditor from "./components/MarkdownEditor";
import NotesList from "./components/NotesList";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppContainer = styled.div`
    display: flex;
`;

function App() {
    return (
        <AppContainer>
            <Router>
                <SideBar />
                <NotesList />
                <Switch>
                    <Route path="/note/:id" component={MarkdownEditor} />
                </Switch>
            </Router>
        </AppContainer>
    );
}

export default App;
