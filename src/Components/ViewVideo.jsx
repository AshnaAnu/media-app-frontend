import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VideoCard from './VideoCard'
import { getVideoAPI } from '../Services/AllAPIs'

function ViewVideo({addVideoResponse}) {

    const [allvideos, setAllVideos] = useState([])
    const [deleteVideoStatus,setDeleteVideoStatus] = useState("")

    const getVideos = async () => {
        try {
            const response = await getVideoAPI()
            console.log(response.data);
            if (response.status >= 200 && response.status <= 300) {
                setAllVideos(response.data) //to assign videos to the state
            }
            else {
                console.log(response.message); //error message

            }

        }
        catch (err) {
            console.log(err);


        }
    }

    useEffect(() => {
        getVideos()
    }, [addVideoResponse,deleteVideoStatus])


    return (
        <div>
            <Row className='p-2'>
                {
                    allvideos.length > 0 ?
                        allvideos.map(item => (
                            <Col>
                                <VideoCard displayVideo = {item} setDeleteVideoStatus={setDeleteVideoStatus}/>
                            </Col>

                        ))

                        : <p className='text-danger fw-bolder'>No Videos Found...</p>
                }

            </Row>
        </div>
    )
}


export default ViewVideo