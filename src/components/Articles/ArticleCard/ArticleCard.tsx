import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }: { article: Article }) => {
    return (
      <>
        <Link to={article.node.url} target="_blank">
          <div
            key={article.node.id}
            className="article-card"
          >
            <div className="article-card-div">
              <p className=" article-card-text">
                {article.node.title}
              </p>
            </div>
            <div className="article-card-overlay">
              <svg className="article-card-arc">
                <path
                  fill="#f7f6fb"
                  d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
                ></path>
              </svg>
              <p>{article.node.brief.substring(0,150)}...</p>
            </div>
          </div>
        </Link>
      </>
    );
  };

export default ArticleCard