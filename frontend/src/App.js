import "./App.css";
import LeftHeader from "./components/leftHeader/LeftHeader";
import NotesList from "./components/notesList/NotesList";
import RightHeader from "./components/rightHeader/RightHeader";
import TextEditor from "./components/textEditor/TextEditor";

function App() {
    return (
        <div className="App">
            <div className="app__left-page">
                <LeftHeader />
                {/* <SearchBar /> */}
                <NotesList />
            </div>
            <div className="app__right-page">
                <RightHeader />
                <TextEditor />
            </div>
        </div>
    );
}

export default App;
