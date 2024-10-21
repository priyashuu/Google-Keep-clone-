import react from "react"
import Header from './Header';
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes";
function App(){
    return (
        <div>
        <Header />
        <Note title={notes[0].title} />
        <Footer />
        

        </div>

    )
}
export default App;