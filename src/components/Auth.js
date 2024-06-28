import classes from "./Auth.module.css";
import { userAuthActions } from "../store/user-auth-slice";
import { useDispatch } from "react-redux";

const Auth = () => {
    const dispatchFun = useDispatch();

    const logInHandler = () => {
        dispatchFun(userAuthActions.logIn());
    };
    const userAuthHandler = (event) => {
        event.preventDefault();
    };
    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={userAuthHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" />
                    </div>
                    <button onClick={logInHandler}>Войти</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
