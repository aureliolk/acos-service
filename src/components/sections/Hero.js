import React /*,{ useState,useRef,useEffect }*/ from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
 
// import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Agência de desenvolvimento para sites <span className="text-color-primary-gradient">Profissionais</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Criamos o site da sua empresa com as melhores práticas de segurança, funcionalidade e responsividade aprimorada para uma melhor experiência do Usuário.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Ver Portifolio
                    </Button>
                  <Button className="primary-custons" wideMobile href="https://github.com/cruip/open-react-template/">
                    <span>Solicitar Orçamento</span>
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01 d-flex" data-reveal-value="20px" data-reveal-delay="800"> 
          <Image
                className="has-shadow"
                src={require('./../../assets/images/acos_service_video_1.gif')}
                alt="Hero"
                // width={896}
                // height={504} 
                width={'100%'}
                />
          <div className='container-xs margin'>      
          <h2 className="mt-20 mb-20 reveal-from-bottom" data-reveal-delay="200">
              Sites Profissionais que você mesmo pode customizar para <span className="text-color-primary-gradient">Seu Negócio Online</span>
            </h2>
           {/* <p className="mt-0 mb-20">Acelere o crescimento da sua empresa, e veja os resultados reais em gráficos.</p>        */}
           </div>
          <Image
                className="has-shadow"
                src={require('./../../assets/images/acos_service_video_2.gif')}
                alt="Hero"
                width={'100%'}
                />                 
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;