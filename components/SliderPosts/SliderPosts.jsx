'use client';
import React from 'react'
import styles from './SliderPosts.module.scss'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export const SliderPosts = ({ slides }) => {

  return (
    <div className={styles.sliderPosts}>
      <div className="container">
        <Swiper
          className={styles.slider}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          // autoplay={{
          //   delay: 4000,
          // }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            880: {
              slidesPerView: 3,
            },
            1220: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link
                href={slide.link}
                className={styles.slideItem}>
                <div className={styles.slideItemImg}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.slideItemContent}>
                  <div className={styles.slideItemContentTop}>
                    <span className={styles.category}>{slide.category}</span>
                  </div>
                  <div className={styles.slideItemContentBottom}>
                    <h3 className={styles.title}>{slide.title}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}