import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAvideo, getCategoryAPI, updateCategoryAPI } from '../Services/AllAPIs';
import { MdDelete } from "react-icons/md";
import VideoCard from './VideoCard';

function AddCategory() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");

  const [getCategory, setgetCategory] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (!category) {
      alert("Category name cannot be empty.");
      return;
    }

    try {
      const response = await addCategoryAPI({ categoryName: category, allVideos: [] });
      console.log(response);
      setCategory(""); // Clear the input after submission
      handleGetCategory(); // Get all categories
      setShow(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleGetCategory = async () => {
    const response = await getCategoryAPI();
    console.log(response);
    setgetCategory(response.data);
  };

  const handleDeleteCategory = async (id) => {
    const response = await deleteCategoryAPI(id);
    console.log(response);
    setDeleteStatus(response);
  };

  const videoDrop = async (e, categoryId) => {
    e.preventDefault();
    console.log("video drop" + categoryId, e);
    const videoId = e.dataTransfer.getData("videoId");
    console.log("videoId" + videoId);

    // Get a particular video
    const { data } = await getAvideo(videoId);
    console.log(data);

    // Get category details 
    const selectedCategory = getCategory.find(item => item.id === categoryId);
    
    selectedCategory.allVideos.push(data);

    await updateCategoryAPI(categoryId, selectedCategory);
    console.log("Category updated successfully with new video.");
    handleGetCategory();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    handleGetCategory();
  }, [deleteStatus]);

  return (
    <div className="container mt-4">
      <Button
        variant="primary"
        onClick={handleShow}
        className='mt-2'
        size='md'
        style={{ width: "300px" }}
      >
        Add Category
      </Button>

      <div className='row mt-4'>
        {getCategory.length > 0 ? getCategory.map(item => (
          <div key={item.id} 
               className='col-12 mb-3 p-3 border border-light rounded d-flex flex-column' 
               onDragOver={dragOver}
               onDrop={(e) => videoDrop(e, item.id)}
               style={{ backgroundColor: "#2c2c2c", color: "#fff", position: "relative" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className='m-0'>{item.categoryName}</p>
              <button
                className='btn btn-danger btn-sm p-1'
                onClick={() => handleDeleteCategory(item.id)}
                style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Fixed size
              >
                <MdDelete />
              </button>
            </div>

            <div className="row">
              <div className="col">
                {item.allVideos && item.allVideos.map((data, idx) => (
                  <VideoCard key={idx} displayVideo={data} />
                ))}
              </div>
            </div>
          </div>
        )) : <p>No Data Found</p>}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type='text'
            placeholder='Category Name'
            className='form-control'
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategory;







// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { addCategoryAPI, deleteCategoryAPI, getAvideo, getCategoryAPI, updateCategoryAPI } from '../Services/AllAPIs';
// import { MdDelete } from "react-icons/md";
// import VideoCard from './VideoCard';

// function AddCategory() {
//   const [show, setShow] = useState(false);
//   const [category, setCategory] = useState({ categoryName: "" }); // Initialize with empty category name

//   const [getCategory, setgetCategory] = useState([]); // State to store all categories
//   const [deleteStatus, setDeleteStatus] = useState([]); // State to manage delete status

//   const handleClose = () => {
//     setShow(false);
//   };
//   const handleShow = () => setShow(true);

//   // Function to handle adding a new category
//   const handleAddCategory = async () => {
//     if (!category.categoryName) {
//       alert("Category name cannot be empty.");
//       return;
//     }

//     // Create new category object with an empty allVideos array
//     const newCategory = {
//       categoryName: category.categoryName,
//       allVideos: [],  // Initialize allVideos as an empty array
//     };

//     try {
//       const response = await addCategoryAPI(newCategory); // Call API to add category
//       console.log(response);
//       setCategory({ categoryName: "" }); // Clear the input after submission
//       handleGetCategory(); // Refresh categories after adding
//       setShow(false); // Close modal
//     } catch (error) {
//       console.error("Error adding category:", error);
//     }
//   };

//   // Function to fetch all categories
//   const handleGetCategory = async () => {
//     const response = await getCategoryAPI();
//     console.log(response);
//     setgetCategory(response.data); // Update state with fetched categories
//   };

//   // Function to handle deleting a category
//   const handleDeleteCategory = async (id) => {
//     const response = await deleteCategoryAPI(id);
//     console.log(response);
//     setDeleteStatus(response); // Update delete status
//     handleGetCategory(); // Refresh categories after deleting
//   };

//   // Function to handle dropping a video on a category
//   const videoDrop = async (e, categoryId) => {
//     e.preventDefault();
//     console.log("video drop" + categoryId, e);
//     const videoId = e.dataTransfer.getData("videoId");
//     console.log("videoId" + videoId);

//     // Get a particular video
//     const { data } = await getAvideo(videoId);
//     console.log(data);

//     // Find the selected category
//     const selectedCategory = getCategory.find(item => item.id === categoryId);

//     // Add videos into the allVideos category
//     selectedCategory.allVideos.push(data);

//     await updateCategoryAPI(categoryId, selectedCategory); // Update category with new video
//     console.log("Category updated successfully with new video.");
//     handleGetCategory(); // Refresh categories after updating
//   };

//   // Function to handle drag over event
//   const dragOver = (e) => {
//     console.log("video drag over");
//     e.preventDefault();
//   };

//   // Fetch categories on component mount
//   useEffect(() => {
//     handleGetCategory();
//   }, [deleteStatus]);

//   return (
//     <div>
//       <Button
//         variant="primary"
//         onClick={handleShow}
//         className='mt-2'
//         size='md'
//         style={{ width: "300px" }}
//       >
//         Add Category
//       </Button>

//       <div className='row d-flex flex-column'>
//         {getCategory.length > 0 ? getCategory.map(item => (
//           <div key={item.id} // Added key prop to avoid warning
//                onDragOver={e => dragOver(e)}
//                onDrop={(e) => videoDrop(e, item.id)}
//                className='col d-flex m-3 p-2 border border-light justify-content-between'>
//             <p>{item.categoryName}</p>
//             <button
//               className='btn btn-danger btn-sm p-1'
//               onClick={() => handleDeleteCategory(item.id)}
//               style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Fixed size
//             >
//               <MdDelete />
//             </button>
//             <div className="row">
//               <div className="col " style={{height:"300px"}}>
//                 {item.allVideos && item.allVideos.map((data) => (
//                   <VideoCard key={data.id} displayVideo={data} /> // Added key prop to avoid warning
//                 ))}
//               </div>
//             </div>
//           </div>
//         )) : <p>No Data Found</p>}
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input
//             type='text'
//             placeholder='Category Name'
//             className='form-control'
//             value={category.categoryName}
//             onChange={e => setCategory({ ...category, categoryName: e.target.value })}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleAddCategory}>
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default AddCategory;






// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { addCategoryAPI, deleteCategoryAPI, getAvideo, getCategoryAPI, updateCategoryAPI } from '../Services/AllAPIs';
// import { MdDelete } from "react-icons/md";
// import VideoCard from './VideoCard';

// function AddCategory() {
//   const [show, setShow] = useState(false);
//   const [category, setCategory] = useState("");

//   const [getCategory, setgetCategory] = useState({
//     categoryName:"",
//     allVideos:[]
//   })
//   const [deleteStatus, setDeleteStatus] = useState([])

//   const handleClose = () => {
//     setShow(false);
//   };
//   const handleShow = () => setShow(true);

//   const handleAddCategory = async () => {
//     if (!category.categoryName) {
//       alert("Category name cannot be empty.");
//       return;
//     }

//     try {
//       const response = await addCategoryAPI(category); // Pass the category as an argument
//       console.log(response);
//       setCategory({ categoryName: "" }); // Clear the input after submission
//       handleGetCategory() //get all categories
//       setShow(false);
//     } catch (error) {
//       console.error("Error adding category:", error);
//     }
//   };

//   const handleGetCategory = async () => {
//     const response = await getCategoryAPI()
//     console.log(response);
//     setgetCategory(response.data)

//   }

//   const handleDeleteCategory = async (id) => {
//     const response = await deleteCategoryAPI(id)
//     console.log(response);
//     setDeleteStatus(response)

//   }

//   const videoDrop = async (e, categoryId) => {
//     e.preventDefault()
//     console.log("video drop" + categoryId, e);
//     const videoId = e.dataTransfer.getData("videoId")
//     console.log("videoId" + videoId);
//     //get a particular video

//     const { data } = await getAvideo(videoId)
//     console.log(data);
//     // get category details 

//     const selectedCategory = getCategory?.find(item => item.id == categoryId)

//     // Check if selectedCategory was found
//     if (!selectedCategory) {
//       console.error("No category found with id: " + categoryId);
//       return;
//     }

//     // Ensure selectedCategory has an allVideos property that is an array
//     if (!Array.isArray(selectedCategory.allVideos)) {
//       selectedCategory.allVideos = []; // Initialize as an empty array if not defined
//     }



//     //add videos in to the allvideos category
//     selectedCategory.allVideos.push(data)
//     // await updateCategoryAPI(categoryId,selectedCategory)

//     await updateCategoryAPI(categoryId, selectedCategory);
//     console.log("Category updated successfully with new video.");
//     handleGetCategory()







//   }

//   const dragOver = (e) => {
//     console.log("videodrag over");
//     e.preventDefault()

//   }

//   //my way

//   // const videoDrop = (e, id) => {
//   //   e.preventDefault(); // Prevent default behavior
//   //   const draggedVideoId = e.dataTransfer.getData("VideoId"); // Retrieve the ID of the dragged item
//   //   console.log("Video drop on id: " + id, "Dragged video ID: " + draggedVideoId, e);
//   // };

//   useEffect(() => {
//     handleGetCategory()
//   }, [deleteStatus])



//   return (
//     <div>
//       <Button
//         variant="primary"
//         onClick={handleShow}
//         className='mt-2'
//         size='md'
//         style={{ width: "300px" }}
//       >
//         Add Category
//       </Button>
//       {/* 
//       onDrop={(e) => videoDrop(e, item.id)} // Handle drop event
//             onDragOver={(e) => e.preventDefault()} // Allow drop by preventing default behavior */}

//       <div className='row'>
//         {getCategory.length > 0 ? getCategory.map(item => (
//           <div onDragOver={e => dragOver(e)}
//             onDrop={(e) => videoDrop(e, item.id)}
//             className='col d-flex m-3 p-2 border border-light justify-content-between'>
//             <p>{item.categoryName}</p>
//             <button
//               className='btn btn-danger btn-sm p-1'
//               onClick={() => handleDeleteCategory(item.id)}
//               style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Fixed size
//             >
//               <MdDelete />
//             </button>
//             <div className="row">
//         <div className="col">
//           {item.allVideos && item.allVideos.map((data)=>(
//              <VideoCard displayVideo={data} />
//           ))
           
//         }
//         </div>
//       </div>



//           </div>
//         )) : <p>No Data Found</p>}

//       </div>

      

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input
//             type='text'
//             placeholder='Category Name'
//             className='form-control'
//             value={category.categoryName}
//             onChange={e => setCategory({ ...category, categoryName: e.target.value })}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleAddCategory}>
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default AddCategory;




// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { addCategoryAPI } from '../Services/AllAPIs';

// function AddCategory() {
//     const [show, setShow] = useState(false);
//     const [category,setCategory] = useState({
//       categoryName:""
//     })

//     const handleClose =async () => {
//       const response = await addCategoryAPI()
//       console.log(response);
//       setCategory(category)
//       setShow(false);
//     }
//     const handleShow = () => setShow(true);
//   return (
//     <div>
//         <Button variant="primary" onClick={handleShow} className='mt-2'
//         size='md' style={{width:"300px"}}>
//         Add Category
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <input type='text' placeholder='Category Name' className='form-control' onChange={e=>setCategory({...category,categoryName})}/>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button  variant="primary" onClick={handleClose}>
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </div>
//   )
// }

// export default AddCategory