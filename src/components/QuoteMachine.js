import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = props => (
  <Card>
    <CardContent>
      <Typography id='text' variant="h6">"{props.selectedQuote.quote}"</Typography>
      <Typography id='author' color="textSecondary" variant="subheading">
        - {props.selectedQuote.author} -
      </Typography>
    </CardContent>

    <CardActions>
      <Button id='new-quote' onClick={props.assignNewQuoteIndex}>Next Quote</Button>
      <IconButton id= 'tweet-quote'
        target="_blank"
        href={encodeURI(`http://twitter.com/intent/tweet?text="${
          props.selectedQuote.quote
        }" - ${props.selectedQuote.author} -&hashtags=freeCodeCamp_challenge`)}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
