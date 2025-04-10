import { Col } from 'react-bootstrap';
import { Fragment } from 'react/jsx-runtime';
import cell from 'assets/img/AdobeStock_847496013.jpeg';
import inpographic from 'assets/img/inphographic.png';
import drugDevProgram from 'assets/data/drugs-development-program.json';
import comparation from 'assets/data/comparation.json';
import Detailed from './DrugDevProgram/Detailed';
import { useState } from 'react';
import useCarouselControlClick from 'Hooks/useCarouselControlClick';
import { Helmet } from 'react-helmet-async';
import our_research from 'assets/img/our-research.png';
import logo_tab from 'assets/img/logo_tab.png';
import gen from 'assets/img/KeyAdvantagesofOurApproach.jpeg';
import HeaderPage from 'Components/HeaderPage';
import ImageSection from 'Components/ImageSection';
import DrugDevCarousel from 'Components/DrugDevCarousel';
import DrugDevTable from 'Components/DrugDevTable';
import { DrugDevProgram } from 'types';
import ComparisonCarousel from 'Components/ComparisonCarousel';
import ComparisonTable from 'Components/ComparisonTable';
import KeyAdvantages from 'Components/KeyAdvantages';

const DrugDevelopmentPrograms = () => {
  const onCarouselControlClick = useCarouselControlClick();
  const [showDetail, setShowDetail] = useState(false);
  const [detailedData, setDetailedData] = useState({});
  const {
    'drugs-dev-program': drugDevPrograms,
  }: { 'drugs-dev-program': DrugDevProgram[] } = drugDevProgram;

  const handleShowDetail = (data: DrugDevProgram) => {
    setShowDetail(true);
    setDetailedData(data);
  };

  return (
    <>
      <Helmet>
        <meta name='robots' content='noindex, nofollow' />
      </Helmet>
      <Fragment>
        {/* Header Page */}
        <HeaderPage
          title='Our Drug Development Programs'
          text={[
            ' At Oocidia, we focus on creating advanced solutions that address some of the most pressing challenges in veterinary medicine. Our innovative drug development programs are designed to combat parasitic diseases that significantly impact livestock and companion animals worldwide. By targeting neglected diseases with high economic and health burdens, we aim to deliver first-in-class therapeutics that improve animal welfare, enhance productivity, and support sustainable farming practices.',
          ]}
          image={cell}
          imageAlt='cell'
        />

        {/* Research Focus */}
        <ImageSection
          title='Our Research Focus'
          image={our_research}
          imageAlt='Our Research Focus'
        />

        {/* +++++++++ PIPELINE OVERVIEW +++++++++ */}
        {/* Large screen view */}
        <Col
          xl={10}
          className='mx-auto my-10 d-none d-lg-block animate__animated animate__fadeInUp'
        >
          <h2 className='text-blue-200 my-5'>Pipeline Overview</h2>
          <p>
            Oocidia’s pipeline features seven first-in-class therapeutics
            targeting critical parasitic diseases in livestock and companion
            animals. Each program is tailored to address specific unmet needs in
            animal health while ensuring safety, efficacy, and practicality for
            farmers and veterinarians.
          </p>
          <DrugDevTable
            drugDevPrograms={drugDevPrograms}
            handleShowDetail={handleShowDetail}
          />
        </Col>

        {/* Small screen view */}
        <Col className='d-lg-none mt-5 mb-10'>
          <h2 className='text-blue-200 my-5'>Pipeline Overview</h2>
          <p>
            Oocidia’s pipeline features seven first-in-class therapeutics
            targeting critical parasitic diseases in livestock and companion
            animals. Each program is tailored to address specific unmet needs in
            animal health while ensuring safety, efficacy, and practicality for
            farmers and veterinarians.
          </p>
          <DrugDevCarousel
            drugDevPrograms={drugDevPrograms}
            handleShowDetail={handleShowDetail}
            onCarouselControlClick={onCarouselControlClick}
          />
        </Col>

        {/* Why our Work matters */}
        <ImageSection
          title='Why our Work Matters ?'
          image={inpographic}
          imageAlt='inphographic parasitic diseases'
          text="Imagine the countless lives, both animal and human, silently burdened 
                          by the insidious creep of parasitic disease. Billions lost, not just 
                          in dollars, but in the vibrant lives of creatures great and small, 
                          their well-being stolen by invisible foes. We cannot stand idly by 
                          as current treatments falter, their promises broken by toxicity, 
                          fading power, and the looming shadow of resistance. Oocidia ignites 
                          a revolution, a passionate drive to forge a new era of veterinary 
                          care. We are pioneers, crafting solutions that not only heal, but 
                          empower, safeguarding animals with safer, more potent antiparasitics. 
                          We embrace the One Health vision, understanding that our mission is a 
                          symphony of interconnected lives. By striking at the heart of 
                          transmission, we shield not just animals, but the very communities 
                          that depend on them, protecting our shared home. This is more than 
                          just drug development; it's a crusade against silent suffering. 
                          Oocidia will not rest until we've expanded our reach, until 
                          we've confronted every neglected disease that dares to steal our harmony."
        />

        {/* Key advantages */}
        <KeyAdvantages logoTab={logo_tab} gen={gen} />

        {/* Comparison Table (untuk layar besar) */}
        <ComparisonTable
          comparisons={comparation.comparation}
          logoTab={logo_tab}
        />

        {/* Comparison Carousel (untuk layar kecil) */}
        <ComparisonCarousel comparisons={comparation.comparation} />

        <Detailed
          show={showDetail}
          handleClose={() => setShowDetail(false)}
          data={detailedData}
        />
      </Fragment>
    </>
  );
};

export default DrugDevelopmentPrograms;
