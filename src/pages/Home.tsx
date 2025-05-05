import { motion } from "framer-motion";
import Banner from "../components/Home-Items/Banner";
import FeaturedCars from "../components/Home-Items/FeaturedCars";
import Testimonials from "../components/Home-Items/Testimonials";
import WhyChooseUs from "../components/Home-Items/WhyChooseUs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="home-container"
    >
      <motion.div variants={itemVariants}>
        <Banner />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FeaturedCars />
      </motion.div>
      <motion.div variants={itemVariants}>
        <WhyChooseUs />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Testimonials />
      </motion.div>
    </motion.div>
  );
};

export default Home;
