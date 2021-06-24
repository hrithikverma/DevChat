import React from "react";
import { Progress } from "semantic-ui-react";

class ProgressBar extends React.Component {
  render() {
    const { percentUploaded, uploadState } = this.props;
    return (
      uploadState === "uploading" && (
        <Progress
          percent={percentUploaded}
          className="progress__bar"
          progress
          indicating
          size="medium"
          inverted
        />
      )
    );
  }
}

export default ProgressBar;
