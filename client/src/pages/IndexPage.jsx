import "../css/home.css";

const About = () => (
  <div className="about">
    <div className="aboutitem header">Welcome To Blogger</div>
    <div className="aboutitem smallinfo">
      Embark on a journey through words, where stories unfold and ideas blossom
      <br />
      Welcome to our blog, a realm of inspiration and exploration!
    </div>
    <div className="aboutitem buy">
      <button
        className="button-home"
        onClick={() => {
          window.location.href = "/blogs";
        }}
      >
        View Blogs
      </button>
    </div>
  </div>
);

const IndexPage = () => (
  <div className="home-body">
    <About />
  </div>
);

export default IndexPage;
