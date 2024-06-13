import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
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
  },
  {
    title: "GingerBook",
    img: "/img/ginger-book.png",
    description: (
      <>
        Build and test react components with Storybook like stories. PS, it
        generates react icons component from SVGs.
      </>
    ),
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
  },
  {
    title: "GingerJS",
    img: "/img/ginger-js.png",
    description: (
      <>
        GingerJS is a full stack framework for writing web applications with
        Python on the backend and React on the frontend.
      </>
    ),
  },
  {
    title: "GingerUI",
    img: "/img/ginger-ui.png",
    description: <>Sleek classy React UI library using Uber's design system.</>,
  },
  {
    title: "GingerCode",
    img: "/img/ginger-code.png",
    description: <>Container first Code editor.</>,
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img width={250} src={img} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
