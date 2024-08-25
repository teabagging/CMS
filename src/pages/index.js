import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

// Feature and component data
const features = [
    {
      title: 'strapi',
      png: require('@site/static/img/19872173.png').default,
      description: (
        <>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript/TypeScript.
        </>
      ),
      denouement: (
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/strapi/getting-started/intro">
            Details
          </Link>
        </div>
      ),
    },
    {
      title: 'Ghost',
      png: require('@site/static/img/2178663.png').default,
      description: (
        <>
          Independent technology for modern publishing, memberships, subscriptions and newsletters.
        </>
      ),
      denouement: (
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Ghost/Getting%20Started/Ghost%20on%20Ubuntu">
            Example
          </Link>
        </div>
      ),
    },
    {
      title: 'hugo',
     png: require('@site/static/img/29385237.png').default,
      description: (
        <>
          The world’s fastest framework for building websites.
        </>
      ),
      denouement: (
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/hugo/getting-started/quick-start">
            Projects
          </Link>
        </div>
      ),
    },
  ];
  
  const components = [
    {
      title: 'Create AI📚',
      content: '🔥Bringing AI to the world.',
      url: 'https://ai.543x.com/'
    },
    {
      title: 'Swap📝',
      content: '🔥The Monetary Future: At the intersection of free banking, cryptography, and digital currency',
      url: 'https://s.543x.com/'
    },
    {
      title: 'What is Bitcoin🐱',
      content: '🔥Bitcoin: A Peer-to-Peer Electronic Cash System',
      url: 'https://www.543x.com/'
    },
    {
      title: 'blockchain🧠',
      content: '🔥Blockchain is a shared, immutable ledger',
      url: 'https://www.z2.pw'
    },
    {
      title: 'Library for Web 💻',
      content: '🔥The library for web and native user interfaces.',
      url: 'https://r.543x.com/'
    },
    {
      title: 'Create Solana🚀',
      content: '🔥Bringing Blockchain to the World.',
      url: 'https://b.543x.com/'
    },
    {
      title: 'Create React📗',
      content: '🔥Set up a modern web app by running one command.',
      url: 'https://e.543x.com/'
    },
    {
      title: 'Firebase💼',
      content: '🔥Google tools help build applications, improve quality and efficiency',
      url: 'https://d.543x.com/'
    },
    {
      title: 'Create React App🐛',
      content: '🔥Bringing modern web apps to the World.',
      url: 'https://c.543x.com/'
    }
  ];


function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
  
    return (
      <Layout
        permalink={'/'}
        description={'Set up a modern web app by running one command.'}
      >
        <div className={clsx('hero hero--dark', styles.heroBanner)}>
          <div className="container">
            <img
              className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
              alt="Logo"
              src={useBaseUrl('img/logos.png')}
            />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.getStarted}>
              <Link
                className="button button--outline button--primary button--lg"
                to={useBaseUrl('docs/strapi/getting-started/intro')}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
  
        {features.length > 0 && (
  <div className={styles.features}>
    <div className="container">
      <div className="row">
        {features.map(({ png, title, description, denouement }, idx) => (
          <div className={clsx('col col--4')} key={idx}>
            <div className="text--center">
              <img src={png} className={styles.featureSvg} alt={title} role="img" /> {/* Use 'img' tag */}
            </div>
            <div className="text--center padding-horiz--md">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            {denouement && (
              <div className="text--center">{denouement}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)}

  
        {components.length > 0 && (
          <div className={styles.features}>
            <div className="container">
              <div className="row">
                {components.map(({ title, url, content }, idx) => (
                  <div key={idx} className={clsx('col col--4', styles.feature)}>
                    <div className={styles.card}>
                      <h3>{title}</h3>
                      <p>{content}</p>
                      <Link className="button button--primary" to={url}>
                        Visit website
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
  
  export default Home;