import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Loadable from "react-loadable";

//COMPONENTS
// import AdminLogin from "./views/AdminLogin/AdminLogin";
// import Relationships from "./views/Relationships/Relationships";
// import Post from "./views/Post/Post";
// import EditPost from "./views/EditPost/EditPost";
// import AdminLetters from "./views/AdminLetters/AdminLetters";
// import LetterDetails from "./views/LetterDetails/LetterDetails";
// import FourOhFour from "./views/FourOhFour/FourOhFour";
import Footer from "./components/Footer/Footer";

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
    loader: () => import("./views/Home/Home"),
    loading: Loading
});
const AdminLogin = Loadable({
    loader: () => import("./views/AdminLogin/AdminLogin"),
    loading: Loading
});
const Relationships = Loadable({
    loader: () => import("./views/Relationships/Relationships"),
    loading: Loading
});
const Post = Loadable({
    loader: () => import("./views/Post/Post"),
    loading: Loading
});
const LetterDetails = Loadable({
    loader: () => import("./views/LetterDetails/LetterDetails"),
    loading: Loading
});
const EditPost = Loadable({
    loader: () => import("./views/EditPost/EditPost"),
    loading: Loading
});
const AdminLetters = Loadable({
    loader: () => import("./views/AdminLetters/AdminLetters"),
    loading: Loading
});

const FourOhFour = Loadable({
    loader: () => import("./views/FourOhFour/FourOhFour"),
    loading: Loading
});

// import Home from "./views/Home/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/admin/letters" component={AdminLetters} />
                    <Route path="/admin/letter/:id" component={LetterDetails} />
                    <Route path="/admin" component={AdminLogin} />
                    <Route path="/relationships" component={Relationships} />
                    <Route path="/post" component={Post} />
                    <Route path="/editpost/:id" component={EditPost} />
                    <Route component={FourOhFour} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
