import React, { useContext, useEffect, useState } from 'react'
import { SelectedPostContext } from './SelectedPostContext';
import { MyContext } from './MyContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './details.css';
import { databases } from './AppWriteConfig';
import { Query } from 'appwrite';
import Card from './Component/Card';


function Users() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetchAppWriteDataUser().then((data) => {
      setPosts(data)
      setLoading(false)
    });
  }, [id])

  async function fetchAppWriteDataUser(User) {
    const result = await databases.listDocuments(
      '66c099b50010afdb3db2',
      '66c099c300357afbd22d',
      [
        Query.equal('usersPost', id),
      ]
    );
    return result?.documents;
  }

  const handlePostClicked = (e) => {
    console.log(e)
    setSelectedPost(e)
    navigate('/details');
  }


  return (
    <>
      <div className='top-back'>
        {/* <Link to={"/"} className="icon is-small">
          <i className="fa-solid fa-chevron-left"></i>
        </Link> */}
        <nav className="breadcrumb  has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/details"} >{selectedPost?.title?.substring(0, 30) + '...'}</Link></li>
            <li className="is-active">{selectedPost?.usersPost?.Name}</li>
          </ul>
        </nav>
      </div>
      <div className="mt-50">
        {loading ? <div className="skeleton-lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> : <>{
          posts && (
            <div className="fixed-grid has-2-cols">
              <div className="grid">
                {posts ? posts?.map(v => (
                  <div onClick={e => handlePostClicked(v)} key={v?.title} className="cell"><Card content={v?.title?.substring(0, 20) + '...'} title={v?.title} time={new Date(v.timestamp).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} username={v?.author} /></div>
                )) : <>Loading....</>}
              </div>
            </div>
          )
        }</>}

      </div>
    </>
  )
}


export default Users;
