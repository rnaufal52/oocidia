import { Helmet } from "react-helmet-async";
import scientis_animals from "assets/img/scientis_animals.png";
import our_research from "assets/img/our-research.png";
import our_core_value from "assets/img/our-core-vallue.png";
import HeaderPage from "Components/HeaderPage";
import ImageSection from "Components/ImageSection";
import InnovationAccordion from "Components/InnovationAccordion";

const ResearchAndInovation = () => (
    <>
        <Helmet>
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        {/* Header Page */}
        <HeaderPage
            title="Research and Innovation at Oocidia"
            text={[
                "At Oocidia, innovation is at the core of our mission. We are dedicated to transforming veterinary medicine by addressing critical gaps in the treatment of parasitic diseases in livestock and companion animals. Through cutting-edge research, we have developed a proprietary platform that delivers first-in-class therapeutics designed to meet the unique challenges of veterinary medicine. Our work is driven by a commitment to improving animal health, enhancing productivity in farming, and creating sustainable solutions for a better future."
            ]}
            image={scientis_animals}
            imageAlt="scientis_animals"
        />

        {/* Sections */}
        <ImageSection title="Our Research Focus" image={our_research} imageAlt="Our Research Focus" />
        <InnovationAccordion />
        <ImageSection title="Our Core Value" image={our_core_value} imageAlt="Our Core Value" />
    </>
);

export default ResearchAndInovation;