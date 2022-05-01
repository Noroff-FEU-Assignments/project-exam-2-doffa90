export default function DashPosts({title,description}){
    return(
        <>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
        </>
    )
}