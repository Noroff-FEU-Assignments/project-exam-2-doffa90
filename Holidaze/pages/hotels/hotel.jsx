import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function Hotel({description,title,id,body,url,alternativeText}) {
  
  return (
     <ul>
       <li key={id}> 
    <Link href='/hotels/[id]' as={`/hotels/${id}`}>
      <a>
        <h2>{title}</h2>
        <img src={url} alt={alternativeText} />
        <ReactMarkdown>{body}</ReactMarkdown>
       <p> {description}</p>
      </a>
    </Link>
    </li>
    </ul>
    )
}
