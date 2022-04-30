export default function Article({title,id,body,url}){

    return(
        <>
        <div className="card-group">
  <div id={id} className="card">
  <img src={url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </div>
  </div>
</div>
</>
    )
}

