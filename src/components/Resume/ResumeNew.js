import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/cvzainalsalamun2024v5.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
    pdfjs.getDocument(pdf).promise.then((pdfDoc_) => {
      setNumPages(pdfDoc_.numPages);
    });
  }, []);

  const handlePageChange = (event) => {
    const newPageNumber = event.target.value;
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {numPages > 1 && (
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1}
              >
                Previous
              </Button>
              <div className="mx-2">
                Page {pageNumber} of {numPages}
              </div>
              <Button
                variant="primary"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber === numPages}
              >
                Next
              </Button>
              <div className="mx-3"></div>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default ResumeNew;
