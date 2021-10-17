import React, { PureComponent } from "react";
import fetchPhoneWords from "./services/fetchPhoneWords";
import WordsPanel from "./components/WordsPanel";
import ActionPanel from "./components/ActionPanel";
import AlertPanel from "./components/AlertPanel";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import EnglishWords from "an-array-of-english-words";
import Grid from "@mui/material/Grid";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      phoneNumber: "",
      phoneWrodsData: {
        valid: true,
        error: "",
        phoneWords: [],
      },
      filter: false,
      filteredWords: [],
      showKeyboard: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  handleFilter(filter) {
    if (filter && this.state.phoneWrodsData.phoneWords.length > 0) {
      this.setState({ loading: true });
      let filteredWords = this.state.phoneWrodsData.phoneWords
        .filter((value) => EnglishWords.includes(value))
        .filter((value, index, self) => self.indexOf(value) === index);
      this.setState({
        loading: false,
        filter: true,
        filteredWords: filteredWords,
      });
    } else {
      this.setState({ filter: false, filteredWords: [] });
    }
  }

  handleKeyboard(showKeyboard) {
    this.setState({ showKeyboard: showKeyboard });
  }

  async handleSubmit(formData) {
    this.setState({ loading: true, phoneNumber: formData });
    let response = await fetchPhoneWords(formData);
    this.setState({
      phoneWrodsData: { ...this.state.phoneWrodsData, ...response },
      loading: false,
    });
  }

  render() {
    return (
      <Grid sx={{ pt:2}} container justifyContent="center">
        <Grid
          container
          spacing={1}
          maxWidth="md"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Backdrop
            sx={{ color: "#fff", zIndex: 999 }}
            open={this.state.loading}
          >
            <CircularProgress />
          </Backdrop>
          <Grid item alignItems="center">
            <ActionPanel
              onSubmit={this.handleSubmit}
              onFilter={this.handleFilter}
              onKeyboard={this.handleKeyboard}
              phoneWrodsData={this.state.phoneWrodsData}
              showKeyboard={this.state.showKeyboard}
            />
          </Grid>
          <AlertPanel
            open={!this.state.phoneWrodsData.valid}
            error={this.state.phoneWrodsData.error}
          />
        </Grid>
        <Grid item xs={12} alignItems="center">
          <WordsPanel
            phoneWords={
              this.state.filter
                ? this.state.filteredWords
                : this.state.phoneWrodsData.phoneWords
            }
            filter={this.state.filter}
          />
        </Grid>
      </Grid>
    );
  }
}
