import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Quêm somos ?</>,
    imageUrl: 'img/quem_somos.svg',
    description: (
      <>
        Agencia de Marketing Digital, especializada em criação de sites, inbound marketing, SEO, mídia online e gestão de redes sociais.
      </>
    ),
  },
  {
    title: <>O que queremos</>,
    imageUrl: 'img/resultado.svg',
    description: (
      <>
        Queremos que sua empresa cresça através de um site na internet, gerando mais clientes e orçamentos a cada visita.
      </>
    ),
  },
];
const features_v2 = [
  {
    title: <>Site Institucional.</>,
    imageUrl: 'img/sites_instutacional.svg',
    description: (
      <>
        Sites institucionais são direto ao ponto, mostre seu serviço e atenda o cliente em poucos cliques.
      </>
    ),
  },
  {
    title: <>Loja Virtual.</>,
    imageUrl: 'img/web_store.svg',
    description: (
      <>
        Quer começar a vender online? Então crie uma loja virtual com tudo que precisa para isso.
      </>
    ),
  },
  {
    title: <>Landing Page.</>,
    imageUrl: 'img/LandPage.svg',
    description: (
      <>
        Uma landing page serve para você converter o usuário em cliente caso esteja vendendo algo.
      </>
    ),
  },
];



function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className='desc'>{description}</p>
      <Link
        className={classnames(
          'button button--outline button--secondary button--lg button-desc',
          styles.getStarted,
        )}
        to={useBaseUrl('docs/doc1')}>
        Solicita Orçamento
      </Link>
    </div>
  );
}

function Feature_v2({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className='desc'>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Agencia ${siteConfig.title}`}
      description="Agencia de Marketing Digital, especializada em criação de sites">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle_v1">Na correria que estamos, é muito importante ter um site, pois na primeira dificuldade de contato, o cliente vai procurar outro, e pode ser o seu concorrente.</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button-checked',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Portifólio
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button-checked',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Contato
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row around">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {/* <div className='container'> */}
          <h2 className='services'>Nossos Serviços</h2>
        {/* </div> */}
        {features_v2 && features_v2.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features_v2.map((props, idx) => (
                  <Feature_v2 key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        
      </main>
    </Layout>
  );
}

export default Home;
