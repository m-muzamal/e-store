import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Convallis interdum purus adepcising dis practurient pousre ac a quam eleifem monthe parturiet pouserse cure temper.</p>
                <div className="ctas">
                    <div className="banner-cta">Reade More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>

            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>; 
};

export default Banner;
