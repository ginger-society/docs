import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
  comingSoon?: boolean;
  docsLink?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "GingerDJ",
    img: "/img/ginger-dj.png",
    description: (
      <>
        A production grade backend framework with all the batteries includer.
        Redis , Postgres , ORM , Prometheus and more.
      </>
    ),
    docsLink: "/docs/ginger-dj",
  },
  {
    title: "GingerBook",
    img: "/img/ginger-book.png",
    description: (
      <>Build and test react components with Storybook like stories.</>
    ),
    docsLink: "/docs/ginger-book",
  },
  {
    title: "GingerDB",
    img: "/img/ginger-db.png",
    description: (
      <>
        GingerDB lets you design your database structure and run instances
        easily using command line. You get ORM models generator as well for TS,
        Rust and Python
      </>
    ),
    docsLink: "/docs/ginger-db",
  },
  {
    title: "GingerScaffolder",
    img: "/img/ginger-scaffolder.png",
    description: <>Project scaffolding tool</>,
    docsLink: "/docs/ginger-scaffolder",
  },
  {
    title: "GingerReleaser",
    img: "/img/ginger-releaser.png",
    description: <>Versioning, Changelog and release management CLI tool</>,
    docsLink: "/docs/ginger-releaser",
  },
  {
    title: "GingerConnector",
    img: "/img/ginger-connector.png",
    description: (
      <>Manages service dependencies in Microservice / Full Stack projects</>
    ),
    docsLink: "/docs/ginger-connector",
  },
  {
    title: "GingerUI",
    img: "/img/ginger-ui.png",
    description: (
      <>
        Sleek classy React UI library using Uber's design system. PS, it
        generates react icons component from SVGs.
      </>
    ),
    docsLink: "/docs/ginger-ui",
  },
  {
    title: "GingerCode",
    img: "/img/ginger-code.png",
    description: <>Container first Code editor.</>,
    comingSoon: true,
  },
];

function Feature({
  title,
  img,
  description,
  comingSoon = false,
  docsLink,
}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img width={250} src={img} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {!comingSoon ? (
          <a href={docsLink}>Read docs</a>
        ) : (
          <span>** Coming soon</span>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
