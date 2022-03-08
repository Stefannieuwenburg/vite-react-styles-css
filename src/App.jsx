// import { Component} from "react"
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

//functional component nieuwe manier van react
export default function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}



//class component woord niet meer gebruikt in modern style

// export default class App extends Component {
    
//     render() { 
//         return (
//             <div className="App">
//                  <Header />
//                  <Content />
//                  <Footer />
//             </div>
//         );
//     }
// }
 



