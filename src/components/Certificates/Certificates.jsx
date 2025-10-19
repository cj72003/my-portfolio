import Slider from "react-slick";
import styles from "./Certificates.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";

const Certificates = () => {
  const certificates = [
    { src: "/certs/cert1.png", title: "Data Visualization" },
    { src: "/certs/cert2.png", title: "Data Visualization using Bokeh" },
    { src: "/certs/cert3.png", title: "Pandas" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show 1 cert at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Card>
    <section id="certificates" className={styles.certificates}>
      <h2>CERTIFICATES</h2>
      <Slider {...settings} className={styles.slider}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <img src={cert.src} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </Slider>
    </section>
    </Card>
  );
};

export default Certificates;
