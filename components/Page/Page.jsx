import React from "react";

import { BlockRenderer } from "components/BlockRenderer";

import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import NotFound from "app/not-found";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  if (props.error) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <Head>
        <title>{props.seo?.title}</title>
        <meta name="description" content={props.seo?.metaDesc} />
      </Head>
      <MainMenu />
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}