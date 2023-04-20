import React from 'react';
import s from '../styles/pages/ProjectsPage.module.css';
import {resources} from '../resources/resources';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation} from 'swiper';
import {Image} from '@/ui/kit/Image/Image';
import {Button} from '@/ui/kit/Button/Button';
import {Title} from '@/ui/kit/Title/Title';

const ProjectsPage: React.FC = () => {
  return (
    <div className={s.root}>
      <Title text={resources.projectsPage.title} className={s.title} />
      <Swiper
        className={s.swiper}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{clickable: true}}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {resources.projectsPage.projects.map((el) => (
          <SwiperSlide key={el.title} className={s.project}>
            <Image className={s.preview} src={el.preview} alt="" width={1200} height={600} />
            <div className={s.information}>
              <div className={s.technology}>
                {el.technology.map((item) => (
                  <div className={s.technologyItem} key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={s.header}>{el.title}</div>
              <div className={s.date}>{el.date}</div>
              <div className={s.description}>{el.description}</div>
              <Button className={s.button} href={el.link}>
                View
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsPage;
