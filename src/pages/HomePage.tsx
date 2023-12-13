// import studentsImg from '../assets/students.jpg';
// import listImg from '../assets/list.jpg';
// import certificateImg from '../assets/certificate.jpg';
import sports from '../assets/sports.jpeg';
import sports1 from '../assets/sports1.jpeg';
import sports3 from '../assets/sports3.jpeg';

export default function HomePage() {
  return (
    <main id="home-page">
      <h2>Our Mission: Your Success</h2>
      <section>
        <img src={sports} alt="A group of students" />
        <div>
          <h3>What we do</h3>
          <p>
            Learn Sports is a platform where you can book your lessons with proffesional coach for any sport you decide to play,
            or where you can find your oponent to play against.
          </p>
        </div>
      </section>

      <section>
        <img src={sports1} alt="A list of sports" />
        <div>
          <h3>What we offer</h3>
          <p>
            We offer a variety of  sport lessons, from one-on-one lesson
            or group lessons. Browse our available lessons to find
            the one that best fits your needs. Here you can also find oponents you can play with based on 
            your rank.
          </p>
        </div>
      </section>
      <section>
        <img src={sports3} alt="Diploma" />
        <div>
          <h3>What you get</h3>
          <p>
            No matter if you are a beginner or your already played some sports,
            we are here to help you level up your sport skills.
          </p>
        </div>
      </section>
    </main>
  );
}
