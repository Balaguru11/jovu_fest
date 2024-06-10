import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GroomList } from "./groom/GroomList";
import { GroomCreate } from "./groom/GroomCreate";
import { GroomEdit } from "./groom/GroomEdit";
import { GroomShow } from "./groom/GroomShow";
import { BrideList } from "./bride/BrideList";
import { BrideCreate } from "./bride/BrideCreate";
import { BrideEdit } from "./bride/BrideEdit";
import { BrideShow } from "./bride/BrideShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { RefreshTokenList } from "./refreshToken/RefreshTokenList";
import { RefreshTokenCreate } from "./refreshToken/RefreshTokenCreate";
import { RefreshTokenEdit } from "./refreshToken/RefreshTokenEdit";
import { RefreshTokenShow } from "./refreshToken/RefreshTokenShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"mongodb"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Groom"
          list={GroomList}
          edit={GroomEdit}
          create={GroomCreate}
          show={GroomShow}
        />
        <Resource
          name="Bride"
          list={BrideList}
          edit={BrideEdit}
          create={BrideCreate}
          show={BrideShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="RefreshToken"
          list={RefreshTokenList}
          edit={RefreshTokenEdit}
          create={RefreshTokenCreate}
          show={RefreshTokenShow}
        />
      </Admin>
    </div>
  );
};

export default App;
