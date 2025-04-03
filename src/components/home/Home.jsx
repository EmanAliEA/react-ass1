import "./home.css";
import homeImg from "../../assets/main1.png";
function Home() {
  return (
    <main class="container mt-4">
      <div class="heading ">
        <div class="text">
          <h1>interior design</h1>
          <p>
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
        </div>
        <img src={homeImg} alt="" />
      </div>
    </main>
  );
}

export default Home;
