import React, { useState } from 'react'

import { Carousel } from 'react-responsive-carousel'

import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectCarousel({data}) {

    const [carouselData, setCarouselData] = useState(data)

    const [activeIndex, setActiveIndex] = useState(0)

    function goToPrevSlide() {
        let index = activeIndex;
        if (index < 1) {
            index = length - 1;
        } else {
            index--
        }
        setActiveIndex(index)
    }

    function goToNextSlide() {
        let index = activeIndex;
        if (index === length - 1) {
            index = 0
        } else {
            index++;
        }
        setActiveIndex(index)
    }

  return (
    <>
        <div className='back-arrow' onClick={() => goToPrevSlide()}>
            <i className='icon flaticon-back' aria-hidden='true'></i>
        </div>
        <div className='slider-text'>
            {data.map((project, idx) => {
                <div
                    className={idx === activeIndex ? 'active' : 'inactive'}
                    key={idx}>
                    <ProjectCard link={project.link} title={project.title} demoGIF={project.demoGIF} description={project.description} key={idx}/>
                </div>
            })}
        </div>
        <div className='next-arrow' onClick={() => goToNextSlide()}>
            <i className='icon flaticon-next' aria-hidden='true'></i>
        </div>
    </>
  )
}
