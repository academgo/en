'use client';
import React from 'react'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from "./AccordionBlock.module.scss"

import chevronDown from "../../assets/shevron-down.svg"
import Image from 'next/image';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image
          className={styles.chevron}
          src={chevronDown}
          alt="Chevron Down"
          width={20}
          height={20}
        />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export const AccordionBlock = ({ slides }) => {
  return (
    <div className={styles.accordion}>
      <Accordion transition transitionTimeout={250}>
        {slides.map((slide) => (
          slide ? (
            <AccordionItem key={slide.question} header={slide.question}>
              {slide.answer && (
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: slide.answer.replace(/\r\n|\r|\n/g, '<br />')
                  }}
                />
              )}
            </AccordionItem>
          ) : (
            <div>Empty</div>
          )
        ))}
      </Accordion>
    </div>
  );
}