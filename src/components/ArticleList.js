import Article from "./Article";

function ArticleList(props) {
  return (
    <main>
        {props.posts.map((article) => (
          <Article key={article.id} title = {article.title} date = {article.date} preview = {article.preview} />
        ))}
    </main>
  );
}

export default ArticleList;
