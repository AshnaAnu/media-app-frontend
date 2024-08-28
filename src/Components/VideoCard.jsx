import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryAPI, deleteVideoAPI } from '../Services/AllAPIs';
import Swal from 'sweetalert2'


function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)

    const { caption, embedLink } = displayVideo

    //to get date and time for timestamp
    
    let today = new Date();
    console.log(today);

    let timestamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today); // .format() should be called here

    console.log(timestamp);

    let videoDetails = { caption, embedLink, timestamp }


    const response = await addHistoryAPI(videoDetails)
    console.log(response);



  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteVideoAPI(id)
      if (response.status >= 200 && response.status <= 300) {
        console.log(response.data);
        setDeleteVideoStatus(response)
        // alert("Video added successfully")
        Swal.fire({
          title: 'Success!',
          text: 'Video deleted Successfully',
          icon: 'Success',
          confirmButtonText: 'Back'
        })

        console.log(response);
      }
    }
    catch (err) {
      console.log(err);

    }

  }

  const dragStarted = (e,id)=>{
    console.log("Video Drag Started"+id,e);
    e.dataTransfer.setData("VideoId",id);
    
  }


  return (
    <div>
      <Card draggable={true} onDragStart={e=>dragStarted(e,displayVideo.id)} style={{ width: '250px', height: "250px" }} className='m-3 p-3 '>
        <Card.Img variant="top" src={displayVideo.url} onClick={handleShow} height={150} />
        <Card.Body className='d-flex justify-content-between'>
          <Card.Title>{displayVideo.caption}</Card.Title>
          <Button variant="danger" onClick={() => handleDelete(displayVideo.id)}><MdDelete /></Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="460" height="315" src={displayVideo.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard