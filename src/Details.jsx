import React, { useContext, useEffect } from 'react'
import { SelectedPostContext } from './SelectedPostContext';
import { MyContext } from './MyContext';
import { Link, useNavigate } from 'react-router-dom';
import './details.css';


function Details() {

  const navigate = useNavigate();
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
  const { posts, setPosts } = useContext(MyContext);


  useEffect(() => {
    console.log(selectedPost, "selectedPost:::")
  }, [selectedPost])

  const handleUserPage = (e) => {
    console.log("handleUserPage", e)
    navigate(`/user/${e?.$id}`);
  }

  return (
    // <div>
    //   <div>{selectedPost?.title}</div>
    //   <div dangerouslySetInnerHTML={{ __html: selectedPost?.content }}></div>

    // </div>
    <>
      <div className='top-back'>
        {/* <Link to={"/"} className="icon is-small">
          <i className="fa-solid fa-chevron-left"></i>
        </Link> */}
        <nav className="breadcrumb  has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><Link to={"/"} className="icon">Home</Link></li>
            <li className="is-active">{selectedPost?.title?.substring(0,30)+'...'}</li>
          </ul>
        </nav>
      </div>
      <div className="box mt-50 content">
        <div className='top-bottom-content'>
          <div className='is-size-2'>{selectedPost?.title}</div>
          {selectedPost?.usersPost?.Name && <span className="tag is-black cursor-pointer" onClick={e => handleUserPage(selectedPost?.usersPost)}>{selectedPost?.usersPost?.Name}</span>}
          <div className='is-size-5' dangerouslySetInnerHTML={{ __html: selectedPost?.content }}></div>
        </div>
      </div>
    </>
  )
}


export default Details;
