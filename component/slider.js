import Slider from "react-slick";
import styles from '../styles/slider.module.css'

const SliderComponent = () => {
          const settings = {
            fade: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

    return (

        <div className={styles.slider}>
            <Slider {...settings}>
               
                <div>
                    <img src="https://plasticseurope.org/wp-content/uploads/2021/10/5.6._aaheader.png" className={styles.sliderImage} alt=""/>
                </div>
              
              
             
            </Slider>



        </div> 


 
    );
};

export default SliderComponent;