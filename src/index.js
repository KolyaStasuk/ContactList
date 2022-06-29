import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

// Import css
import "./index.css";

// Import components
import Header from "./components/Header/Header.js";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  // function base and class based

  state = {
    PeopleList: [
      {
        id: uuidv4(),
        name: "Alexander Verdnam",
        phone: "(067)125-45-21",
        email: "av@gmail.com",
        category: "Friends",
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        favorite: true,
      },
      {
        id: uuidv4(),
        name: "Jimmy Frllon",
        phone: "(050)155-55-31",
        email: "jf@gmail.com",
        category: "Work",
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        favorite: false,
      },
    ],
  };

  onChangeCategory = (id) => {
    const index = this.state.PeopleList.findIndex((e) => e.id === id);
    const tmpList = this.state.PeopleList.slice();
    let currentContact = tmpList[index];

    switch (currentContact.category) {
      case "Work":
        tmpList[index].category = "Family";
        this.setState({
          PeopleList: tmpList,
        });
        break;
      case "Family":
        tmpList[index].category = "Private";
        this.setState({
          PeopleList: tmpList,
        });
        break;
      case "Private":
        tmpList[index].category = "Friends";
        this.setState({
          PeopleList: tmpList,
        });
        break;
      case "Friends":
        tmpList[index].category = "Work";
        this.setState({
          PeopleList: tmpList,
        });
        break;
    }
  };

  onChangeFavorite = (id) => {
    const index = this.state.PeopleList.findIndex((e) => e.id === id);
    const tmpList = this.state.PeopleList.slice();
    let currentFavorite = tmpList[index];

    switch (currentFavorite.category) {
      case "True":
        tmpList[index].favorite = "False";
        this.setState({
          PeopleList: tmpList,
        });
        break;
      case "False":
        tmpList[index].favorite = "True";
        this.setState({
          PeopleList: tmpList,
        });
        break;
    }
  };

  render() {
    const { PeopleList } = this.state;
    return (
      <>
        <Header />
        <ContactList
          List={PeopleList}
          onChangeCategory={this.onChangeCategory}
          onChangeFavorite={this.onChangeFavorite}
        />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
