import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import React from "react";

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
      <section>
        <Button
          onClick={createPdf}
          style={{ width: "100%", backgroundColor: "rgb(13, 44, 90)" }}
          variant="contained"
          startIcon={<DownloadIcon />}>
          Download PDF
        </Button>
      </section>
    </section>
  );
};
