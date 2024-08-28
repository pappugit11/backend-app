// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Comments = () => {
//   const [comments, setComments] = useState([]);

//   const loadComments = async () => {
//     const result = await axios.get(
//       "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/view_comments.php"
//     );
//     console.log(result.data.records);
//     setComments(result.data.records);
//   };

//   useEffect(() => {
//     loadComments();
//   }, []);

//   const deleteComment = (id) => {
//     console.log(id);
//     axios
//       .delete(
//         "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/delete_comments.php",
//         {
//           data: { id: id },
//         }
//       )
//       .then((result) => {
//         console.log(result);
//         loadComments();
//       })
//       .catch(() => {
//         alert("Cannot Delete the code");
//       });
//   };
//   const approveHandler = async (id) => {
//     await axios.post(
//       "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/approve_comments.php",
//       {}
//     );
//     console.log(id);
//   };
//   return (
//     <>
//       <div className="main-content">
//         <section className="section">
//           <div className="section-body">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <h4>Comments</h4>
//                   </div>
//                   <div className="card-body p-0">
//                     <div className="table-responsive">
//                       <table className="table table-striped">
//                         <thead>
//                           <tr className="p-0 text-center">
//                             <th>ID</th>
//                             <th className="text-left">Name</th>
//                             <th className="text-left">Message</th>
//                             <th>Status</th>
//                             <th>Approve</th>
//                             <th>DELETE</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {comments.map((comment, ind) => (
//                             <tr key={ind} className="text-center">
//                               <td>{ind + 1}</td>
//                               <td className="text-left">{comment.name}</td>
//                               <td className="text-left">{comment.message}</td>
//                               <td>{comment.status}</td>
//                               <td>
//                                 {comment.status === "1" ? (
//                                   <span className="approved_txt">
//                                     Comment Approved
//                                   </span>
//                                 ) : (
//                                   <button
//                                     className="btn btn-primary"
//                                     onClick={(e) => approveHandler(comment.id)}
//                                   >
//                                     Approve
//                                   </button>
//                                 )}
//                               </td>

//                               <td>
//                                 <Link
//                                   onClick={() => deleteComment(comment.id)}
//                                   className="btn btn-danger"
//                                 >
//                                   DELETE
//                                 </Link>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Comments;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/view_comments.php"
    );
    console.log(result.data.records);
    setComments(result.data.records);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const deleteComment = (id) => {
    console.log(id);
    axios
      .delete(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/delete_comments.php",
        {
          data: { id: id },
        }
      )
      .then((result) => {
        console.log(result);
        loadComments();
      })
      .catch(() => {
        alert("Cannot Delete the code");
      });
  };

  const approveHandler = async (id, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    try {
      await axios.post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/comments/approve_comments.php",
        { id: id, status: newStatus }
      );
      // Update the local state to reflect the change
      setComments(
        comments.map((comment) =>
          comment.id === id ? { ...comment, status: newStatus } : comment
        )
      );
    } catch (error) {
      console.error("Failed to update comment status:", error);
      alert("Cannot update the status");
    }
  };

  return (
    <>
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Comments</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr className="p-0 text-center">
                            <th>ID</th>
                            <th className="text-left">Name</th>
                            <th className="text-left">Message</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comments.map((comment, ind) => (
                            <tr key={ind} className="text-center">
                              <td>{ind + 1}</td>
                              <td className="text-left">{comment.name}</td>
                              <td className="text-left">{comment.message}</td>
                              <td>
                                {comment.status === "1"
                                  ? "Approved"
                                  : "Pending"}
                              </td>
                              <td>
                                {comment.status === "1" ? (
                                  <span className="approved_txt">
                                    Comment Approved
                                  </span>
                                ) : (
                                  <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                      approveHandler(comment.id, comment.status)
                                    }
                                  >
                                    Approve
                                  </button>
                                )}
                              </td>
                              <td>
                                <Link
                                  onClick={() => deleteComment(comment.id)}
                                  className="btn btn-danger"
                                >
                                  DELETE
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comments;
