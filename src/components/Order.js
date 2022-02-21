import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Sound from "react-sound";
import ModelNotification from "./model_notification.wav";

function Order(
  { index, order },
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) {
  const [show, Setshow] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClose = (index) => {
    Setshow(false);
    // setIsPlaying(false);
  };
  return (
    <div>
      <Modal show={show} onHide={() => handleClose(index)}>
        <Modal.Header closeButton>
          <Modal.Title>New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>OrderId: {order.orderId}</h1>
          <table id="myTable" className="table table-striped border">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.product.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(index)}>
            Close
          </Button>

          {/* <Button variant="primary" onClick={() => handleClose(index)}>
            Save Changes
          </Button> */}
          {/* <PlaySound /> */}
        </Modal.Footer>
        <Sound
          url={ModelNotification}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          // playStatus={Sound.status.PLAYING}
          // playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
        />
      </Modal>
    </div>
  );
}

export default Order;
