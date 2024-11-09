import { useNavigate, useParams, Link } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';

export default function Article() {
  const { urlId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const ref = doc(db, 'articles', urlId);
    getDoc(ref)
      .then((snapshot) => {        
        setArticle(snapshot.data());
      });
  }, [urlId]);

  return (
    <div>
      {!article && <p>No records found!</p>}
      {article && (
        <div key={urlId}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.description}</p>
          <Link to={`/edit/${urlId}`}>
            <button className="edit-button">Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
}
