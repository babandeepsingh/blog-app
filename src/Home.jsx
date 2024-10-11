import React, { useContext, useEffect, useState } from 'react'
import { databases } from './AppWriteConfig';
import { MyContext } from './MyContext';
import { SelectedPostContext } from './SelectedPostContext';
import { useNavigate } from 'react-router-dom';
import Card from './Component/Card';
import { Query } from 'appwrite';

export default function Home() {
    const navigate = useNavigate();

    const { posts, setPosts } = useContext(MyContext);
    const [lastUpdated, setLastUpdated] = useState(localStorage?.getItem("last-updated"));
    const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        console.log(lastUpdated)
        // if (!lastUpdated || !((Date.now() - lastUpdated) / (1000 * 60)) == 30) {
        //     setLoading(true)
        //     fetchAppWriteData().then((data) => {
        //         setLoading(false)
        //         setPosts(data)
        //         setLastUpdated(Date.now())
        //         localStorage?.setItem("last-updated", Date.now())
        //     });
        // }
        fetchAppWriteData().then((data) => {
            setLoading(false)
            setPosts(data)
        })

    }, []);
    async function fetchAppWriteData() {
        const result = await databases.listDocuments(
            import.meta.env.VITE_COLLECTION_ID,
            import.meta.env.VITE_DB_ID

        );
        return result?.documents;
    }


    const handlePostClicked = (e) => {
        console.log(e)
        setSelectedPost(e)
        navigate('/details');
    }
    return (
        <div>

            <section className="hero is-primary mb-6">
                <div className="hero-body">
                    <p className="title">Humanstories & ideas</p>
                    <p className="subtitle">A place to read and deepen your understanding</p>
                </div>
            </section>

            {loading ? (
                <div className="skeleton-lines">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="fixed-grid has-2-cols">
                    <div className="grid">
                        {posts ? posts?.map(v => (
                            <div onClick={e => handlePostClicked(v)} key={v?.title} className="cell"><Card content={v?.title?.substring(0, 20) + '...'} title={v?.title} time={new Date(v.timestamp).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} username={v?.author} /></div>
                        )) : <>Loading....</>}
                    </div>
                </div>
            )
            }
        </div>
    )
}
