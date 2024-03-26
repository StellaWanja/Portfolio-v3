import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

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
          <p>Loading</p>
        ) : (
          <motion.div style={{ x }} className="flex gap-4">
            {articles.map((article) => {
              return <Card article={article} key={article.node.id} />;
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

const Card = ({ article }: { article: Article }) => {
  return (
    <>
      <Link to={article.node.url} target="_blank">
        <div
          key={article.node.id}
          className="card group relative h-[450px] w-[450px] overflow-hidden bg-[#151616] border-2 rounded-lg"
        >
          <div className="absolute inset-0 z-10 grid place-content-center">
            <p className=" p-8 text-2xl font-black uppercase text-[#f7f6fb] backdrop-blur-lg text-center">
              {article.node.title}
            </p>
          </div>
          <div className="card-overlay absolute bg-[#f7f6fb] bottom-0 left-0 right-0 z-30 w-full rounded-tl-3xl translate-y-full duration-200 ease-in-out">
            <svg className="card-arc">
              <path
                fill="#f7f6fb"
                d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
              ></path>
            </svg>
            <p>{article.node.brief}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Articles;
