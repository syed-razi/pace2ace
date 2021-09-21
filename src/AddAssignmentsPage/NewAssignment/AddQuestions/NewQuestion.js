import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const useStyles = (theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  addIcon: {
    padding: theme.spacing(1),
  },
});

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "", marks: "", id: 0 };
  }

  handleQuestionInput(e) {
    this.setState({
      question: e.target.value,
    });
  }

  handleMarksInput(e) {
    this.setState({
      marks: parseInt(e.target.value),
    });
  }

  handleAddQuestion() {
    this.props.onAddQuestion(
      this.state.question,
      this.state.marks,
      this.state.id
    );
    this.setState((prevState) => ({
      question: "",
      marks: "",
      id: prevState.id + 1,
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Question"
          onChange={this.handleQuestionInput.bind(this)}
          value={this.state.question}
        />
        <TextField
          id="standard-number"
          label="Marks"
          type="number"
          value={this.state.marks}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleMarksInput.bind(this)}
        />
        <Fab variant="extended" onClick={this.handleAddQuestion.bind(this)}>
          <AddIcon className={classes.addIcon} />
          Add
        </Fab>
      </form>
    );
  }
}

export default withStyles(useStyles)(NewQuestion);
