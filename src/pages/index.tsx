import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>{siteConfig.title}</h1>
          <div className={styles.buttonContainer}>
            <Link className="button button--secondary button--lg" to="/intro">
              Enter Documentation →
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://www.theintern.fun"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
