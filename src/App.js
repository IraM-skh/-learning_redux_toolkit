import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
    const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
    return (
        <div>
            <Header></Header>
            {!isUserLoggedIn && <Auth></Auth>}
            {isUserLoggedIn && <UserProfile></UserProfile>}
            <Counter />
        </div>
    );
}

export default App;
