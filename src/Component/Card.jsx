function Card({title, username, content, time}) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    
                    <div className="media-content">
                        <p className="title is-5" title={title}>{title.length>72 ? title.substring(0,72)+'...' :title }</p>
                        <p className="subtitle is-6">{username}</p>
                    </div>
                </div>

                <div className="content">
                   {content}
                    <br />
                    <time dateTime={time}>{time}</time>
                </div>
            </div>
        </div>
    )
}
export default Card