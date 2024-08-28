import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { getHistoryAPI, deleteHistoryAPI } from '../Services/AllAPIs';

function WatchHistory() {
  const [history, setHistory] = useState([])
  const [deleteHistory, setDeleteHistory] = useState([])

  const getWatchHistory = async () => {
    const response = await getHistoryAPI()
    console.log(response.data);
    setHistory(response.data)


  }

  useEffect(() => {
    getWatchHistory()
  }, [deleteHistory])

  const handleDelete = async (id) => {
    try {
      const response = await deleteHistoryAPI(id)
      if (response.status >= 200 && response.status <= 300) {
        console.log(response.data);
        setDeleteHistory(response)
        // alert("Video added successfully")
        Swal.fire({
          title: 'Success!',
          text: 'Watch History deleted Successfully',
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

  return (
    <div>
      <Row className='m-2'>
        <Col className='m-3'>
          <h3>Watch History</h3>



        </Col>
        <Col className='m-4'>
          <h5>Back to Home  <Link to={'/home'} style={{ color: "white" }}><FaHome /></Link></h5>
        </Col>
      </Row>
      <Row className='mx-5'>
        <Table bordered hover>
          <thead>
            <tr>
              <th>SL.No</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              history ? history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td><a href={item.embedLink} target="_blank" rel="noopener noreferrer" className='text-light'>
                    {item.embedLink}
                  </a></td>
                  <td>{item.timestamp}</td>
                  {/* <td className='btn bg-danger p-2'>
                    <MdDelete/>
                  </td> */}
                  <td className='text-center'>
                    {history ? (
                      <button
                        className='btn btn-danger btn-sm p-1'
                        onClick={() => handleDelete(item.id)}
                      >
                        <MdDelete />
                      </button>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </td>
                </tr>
              ))
                :
                <tr>
                  <td colSpan="5" className='text-danger fw-bolder text-center'>No Data Found</td>
                </tr>
            }
          </tbody>
        </Table>
      </Row>


    </div>
  )
}

export default WatchHistory