import "./App.css";
import LeftHeader from "./components/leftHeader/LeftHeader";
import NotesList from "./components/notesList/NotesList";
import RightHeader from "./components/rightHeader/RightHeader";
import TextEditor from "./components/textEditor/TextEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="app__left-page">
                    <LeftHeader />
                    {/* <SearchBar /> */}
                    <NotesList />
                </div>

                <div className="app__right-page">
                    <RightHeader />

                    <Switch>
                        <Route path="/" exact>
                            Home
                        </Route>
                        <Route path="/note/:id" component={TextEditor} />
                        {/* <TextEditor /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
