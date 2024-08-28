import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import AddVideo from '../Components/AddVideo';
import { useState } from 'react';
import AddCategory from '../Components/AddCategory';
import ViewVideo from '../Components/ViewVideo';
import {Link} from 'react-router-dom';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [addVideoResponse,setAddVideoResponse] = useState([]);
 

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <div className="row d-flex justify-content-between m-3">
        <div className="col-auto ">
          <h4>Upload New Video <span><FaCloudUploadAlt onClick={handleShow} style={{ cursor: 'pointer' }}/></span></h4>
          <AddVideo show={showModal} handleClose={handleClose} setAddVideoResponse={setAddVideoResponse}/>
        </div>
        <div className="col-auto">
        <h4>Watch History <Link to={'/watch-history'} style={{color:"white"}}><FaHistory /></Link></h4>
        
        </div>
      </div>
      <Row className='m-3'>
        <Col lg={9}>
        {/* view video  */}

        <h3>All Videos</h3>
        <ViewVideo addVideoResponse={addVideoResponse}/>
        
        
        </Col>
        <Col lg={3}>
        {/* add category  */}
        <h3>Add Category</h3>
        
        <AddCategory/>
        </Col>
      </Row>
    </div>
  )
}

export default Home