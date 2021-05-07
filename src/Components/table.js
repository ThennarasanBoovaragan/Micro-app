import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Table(data) {
  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState("");
  const [showLink, setShowLink] = useState("");

  const handleClose = () => setShow(false);

  const tableData = data.data;
  console.log("=====i am tableData", data);
  const handleClick = (listValue) => {
    console.log("====> i am click ", listValue);
    setShow(true);
    setShowTitle(listValue.title);
    setShowLink(listValue.link);
  };

  const dateAndTime = (timestamp) => {
    const date = new Date(timestamp);
    const dateAndTimeVal =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    console.log("===>date", dateAndTimeVal);
    return dateAndTimeVal;
  };

  return (
    <>
      <div className="table">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Title</th>
              <th scope="col">Creation date.</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.items.map((listValue, index) => {
                return (
                  <tr key={index} onClick={() => handleClick(listValue)}>
                    <td>{listValue.owner.display_name}</td>
                    <td>{listValue.title}</td>
                    <td>{dateAndTime(listValue.creation_date)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Title: {showTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Link: {showLink}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
