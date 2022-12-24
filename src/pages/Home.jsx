import "../styles/Home.css"

function Home() {
    return (
      <div className="homepage">
        {/* Put creative picture here for attention */}
        <p className="creative-pic">creative picture</p>
        {/* <img src="https://hackernoon.com/hn-images/1*9npNPVH7iNJ64Koq7EcW5A.jpeg" className="creative-pic" /> */}
        <h1 className="name-heading">Joshua Traver</h1>
        <h2 className="position-sub">Full-Stack Software Developer</h2>
        <p className="slogan-blob">
         Text Blob to capture attention
        </p>
      </div>
    );
  }
  
  export default Home;