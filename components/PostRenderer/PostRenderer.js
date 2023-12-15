'use client';
import React, { useState, useEffect } from 'react';
import { BlockRenderer } from "components/BlockRenderer";
import styles from "./PostRenderer.module.scss";
import Image from "next/image";
import { SidebarRenderer } from 'components/SidebarRenderer';
import { QrBlock } from '../QrBlock';

export const PostRenderer = ({ blocks, date, categories, title, featuredImage, videoUrl }) => {

  // Add your custom rendering logic for Post pages here
  return (
    <main>
      <Image
        width={1920}
        height={350}
        src={featuredImage.node.sourceUrl}
        alt={title}
        className={styles.featuredImage}
      />
      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleWrapper}>
            <div className={styles.mainContent}>
              <div className={styles.meta}>
                <ul>
                  {categories.nodes.map((category) => (
                    <li className={styles.categoryName} key={category.name}>{category.name}</li>
                  ))}
                </ul>
                <span className={styles.date}>{date}</span>
              </div>
              <h1 className={styles.postHeader}>{title}</h1>
              {/* <div className={styles.sidebar}>
              <h2>Latest Posts</h2>
            </div> */}
              {/* Render other Post-specific content here */}
              <BlockRenderer blocks={blocks} />
            </div>
            <div className={styles.sidebar}>
              <SidebarRenderer blocks={blocks} />
            </div>
          </div>
          <div className={styles.addition}>
            <QrBlock />
          </div>
        </div>
      </article>
    </main>
  );
}
