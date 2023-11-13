import { Route, Switch } from "react-router-dom";
import Main from "./layuot/main";
import SingIn from "./layuot/singIn";
import MainMenu from "./components/ui/mainMenu";
import Contacts from "./layuot/contact";
import Catalog from "./layuot/catalog";
function App() {
  return (
    <>
      <MainMenu />
      <Switch>
        <Route path="/catalog/:cardId?" component={Catalog} />
        <Route path="/contact" component={Contacts} />
        <Route path="/singIn/:type?" component={SingIn} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
