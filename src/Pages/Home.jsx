import "../Styles/Home.css";
import Slider from "../Components/Slider";
import HomeCategories from "../Components/HomeCategories";
import TrustedBrandsAndWhy from "../Components/TrustedBrandsAndWhy";
import CustomerReview from "../Components/CustomerReviews";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeCategories />
      <TrustedBrandsAndWhy />
      <CustomerReview />
    </>
  );
};

export default Home;
