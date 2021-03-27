
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
  const data = await res.json();
  return {
    props: { posts: data }
  };
};
function blog({ posts }) {
  return (
    <div className="container pt-4">
      <div className="row">
        <h1>blog</h1>
        <hr />
      </div>

      {
        posts.map(post => {
          <div className="col-12 col-md-4" key={post.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}



export default blog;
