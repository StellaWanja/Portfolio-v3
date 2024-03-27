import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArticleCard from "./ArticleCard/ArticleCard";
import "./Articles.css";
import BarLoader from "./BarLoader/BarLoader";

const requestOptions = {
  method: "POST",
  body: JSON.stringify({
    // Use stringify for the query
    query: `{
         publication(host: "stylades.hashnode.dev") {
         posts(first: 5) {
           edges {
             node {
                id
                title               
                url
                brief             
             }
           }
         }
       } 
     }`,
  }),
  headers: { "content-type": "application/json" },
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //motion effect
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gql.hashnode.com",
          requestOptions
        );
        const apiData = await response.json();
        const fetchedPosts = apiData.data.publication.posts.edges;

        setArticles(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  return (
    <section ref={targetRef} className="article-section">
      <h2>Articles</h2>
      <p className="text">Check out some technical blogs that I've written.</p>
      <div className="article-showcase">
        {loading && !articles ? (
          <div className="m-auto">
            <BarLoader />
          </div>
        ) : (
          <motion.div style={{ x }} className="flex gap-4">
            {articles.map((article) => {
              return <ArticleCard article={article} key={article.node.id} />;
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Articles;
