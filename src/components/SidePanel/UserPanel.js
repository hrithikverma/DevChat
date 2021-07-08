import React from "react";
import firebase from "../../firebase";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";

class UserPanel extends React.Component {
  state = {
    user: this.props.currentUser,
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>,
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>,
    },
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };

  render() {
    const { user } = this.state;

    return (
      <Grid style={{ background: this.props.primaryColor }}>
        <Grid.Column>
          <Grid.Row
            style={{ paddingTop: "5vh", paddingLeft: "0.8vw", margin: 0 }}
          >
            {/* App Header */}
            <Header inverted as="h2" size="large">
              <Icon name="code"></Icon>
              {/* <img src={"images/slack.png"} alt="dev-chat" /> */}
              <Header.Content>DevChat</Header.Content>
            </Header>
            <Header
              style={{
                padding: "0.25em",
                margin: "2vh 0",
              }}
              as="h4"
              inverted
            >
              <Dropdown
                trigger={
                  <span>
                    <Image src={user.photoURL} spaced="right" avatar />
                    {user.displayName}
                  </span>
                }
                style={{ padding: "0.3em" }}
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
