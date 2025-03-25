import useModal from "Hooks/useModal";
import CoFounders from "Components/CoFounders";
import ExecutiveCarousel from "Components/ExecutiveCarousel";
import FullTeam from "Components/FullTeam";
import ImageSection from "Components/ImageSection";
import employe from "assets/data/employe.json";
import our_vision from "assets/img/our-vision.png";
import ReadMoreExecutives from "./StoryAndVision/ReadMoreExecutives";
import farm from "assets/img/farm.png";
import { Helmet } from "react-helmet-async"
import HeaderPage from "Components/HeaderPage"
import { Fragment } from "react/jsx-runtime"

const StoryAndVision = () => {
    const { show, modalValue, handleClose, handleOpen } = useModal();
    const { executives, employees } = employe;

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                {/* Header Page */}
                <HeaderPage
                    title="Our Story and Vision"
                    text={[
                        "At Oocidia, we are on a mission to revolutionize veterinary medicine by addressing some of the most neglected parasitic diseases affecting livestock and companion animals. Officially founded in 2023 by a team of world-class scientists and innovators, the work and idea behind Oocidia was actually born nearly a decade ago from a shared vision to tackle critical gaps in animal health—gaps that have long hindered progress in disease management while contributing to two of humanity's most pressing challenges: antimicrobial resistance (AMR) and the spread of zoonotic diseases.",
                        "Our journey began as a personal project, driven by passion and expertise in veterinary drug development. Today, we are proud to lead the charge with innovative non-antibiotic therapeutics targeting seven major animal diseases that collectively affect billions of animals annually. By developing alternatives to conventional antibiotics, we're not just improving productivity in farming and reducing economic losses—we're helping combat Antimicrobial Resistance, which threatens to cause 39 million deaths globally between 2025 and 2050. Additionally, our work targets critical zoonotic diseases like cryptosporidiosis and toxoplasmosis, creating a protective barrier for both animal and human health.",
                        "Our vision is simple yet bold, and yet practically grounded from our collective experience in drug development: to redefine veterinary medicine through innovation, delivering safe, effective, and accessible solutions that address the most pressing challenges in animal and human health. By reducing reliance on antibiotics in animal farming and preventing the spread of zoonotic diseases at their source, we're creating a healthier future for our planet and its inhabitants."
                    ]}
                    image={farm}
                    imageAlt="farm"
                />

                <CoFounders executives={executives} handleReadMoreClick={handleOpen} />
                <ExecutiveCarousel executives={executives} handleReadMoreClick={handleOpen} onCarouselControlClick={() => {}} />
                <FullTeam employees={employees} />
                <ImageSection title="Our Vision" image={our_vision} imageAlt="Our Vision" />
                <ReadMoreExecutives show={show} handleClose={handleClose} data={modalValue} />
            </Fragment>
        </>
    )
}

export default StoryAndVision
