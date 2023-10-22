import { Route, Switch } from "react-router-dom";
import Main from "./layuot/main";
import Catalog from "./layuot/catalog";
import SingIn from "./layuot/singIn";
import MainMenu from "./components/mainMenu";
import Contacts from "./layuot/contact";
function App() {
  return (
    <>
      <MainMenu />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="/contact" component={Contacts} />
        <Route path="/singIn" component={SingIn} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
