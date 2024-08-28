import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaCloudUploadAlt } from 'react-icons/fa';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Swal from 'sweetalert2'
import { addVideoAPI } from '../Services/AllAPIs';


const AddVideo = ({ show, handleClose,setAddVideoResponse }) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [video, setVideo] = useState({
        caption: "",
        url: "",
        embedLink: ""
    })
    console.log(video);

    const getEmbedLink = (e) => {
        console.log(e.target.value);
        const { value } = e.target
        console.log(value);
        console.log(value.slice(-31));
        const link = `https://www.youtube.com/embed/${value.slice(-31)}`
        setVideo({ ...video, embedLink: link });



    }

    const handleUpload = async () => {
        const { caption, url, embedLink } = video
        if (!caption || !url || !embedLink) {
            alert('please fill your form')
        }
        else {
            try {
                const response = await addVideoAPI(video)
                console.log(response);
                if (response.status >= 200 && response.status <= 300) {
                    console.log(response.data);
                    setAddVideoResponse(response.data)
                    // alert("Video added successfully")
                    Swal.fire({
                        title: 'Success!',
                        text: 'Video added Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Back'
                      })
                    handleClose()
                    

                }
                else {
                    console.log(response.message);
                    // alert(response.message)
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                    handleClose()

                }
            } catch (err) {
                console.log(err);

            }


        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <FaCloudUploadAlt /> Upload Videos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please Fill the Following Details</p>
                <form>
                    <div className="form-group">

                        <input type="text" className="form-control mb-3" id="videoCaption" placeholder="Enter video caption" onChange={e => setVideo({ ...video, caption: e.target.value })} />
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control mb-3" id="videoImage" placeholder="Enter video image URL"
                            onChange={e => setVideo({ ...video, url: e.target.value })} />
                    </div>
                    <div className="form-group">

                        <input onChange={getEmbedLink} type="text" className="form-control mb-3" id="videoUrl" placeholder="Enter video URL" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleUpload}>
                    Upload
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddVideo;

