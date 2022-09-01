import React from 'react'
import Carousel from "react-multi-carousel";
import Container from 'react-bootstrap/Container';
import "react-multi-carousel/lib/styles.css";

import ProjectCard from './ProjectCard'
import { v4 as uuidv4 } from 'uuid';

const projects = [
    {
        "id": "1",
        "thumbnail": "https://github.com/pasqualedem/RocketLeague-RankPredictor/raw/main/docs/res/RL.png",
        "http": "https://github.com/pasqualedem/RocketLeague-RankPredictor",
        "date": "05-12-2022",
        "title": "Rocket League Rank Predictor",
        "description": "A system that predicts the rank of a player in Rocket League."
    },
    {
      "id": "2",
        "thumbnail": "https://www.researchgate.net/profile/Gennaro-Vessio/publication/338641023/figure/fig2/AS:870845199183873@1584637083762/Sample-images-from-the-VisDrone-dataset.ppm",
        "http": "https://github.com/pasqualedem/CrowdCounting-on-VisDrone2021",
        "title": "Crowd Counting on VisDrone 2021",
        "description": "Application of VisDrone2021 challenge"
    },
    {
      "id": "3",
        "thumbnail": "https://www.researchgate.net/profile/Gennaro-Vessio/publication/338641023/figure/fig2/AS:870845199183873@1584637083762/Sample-images-from-the-VisDrone-dataset.ppm",
        "http": "https://github.com/pasqualedem/CrowdCounting-on-VisDrone2020",
        "date": "12-14-2021",
        "title": "Crowd Counting on VisDrone 2020",
        "description": "Study of light-weight model for VisDrone 2020 dataset and development of a web-app for crowd counting with MLOps"
    },
    {
        "id": "4",
        "thumbnail": "https://i.imgur.com/OoY0F42.png",
        "http": "https://github.com/pasqualedem/Deep_CBRS_Amar_Renaissance",
        "date": "02-10-2022",
        "title": "Deep CBRS Amar Renaissance",
        "description": "Improvement of the CBRS Amar project with the use of Graph Neural Networks"
    },
    {
        "id": "5",
        "thumbnail": "https://github.com/pasqualedem/IMPterpreter/raw/master/docs/imgs/main.png",
        "http": "https://github.com/pasqualedem/IMPterpreter",
        "date": "12-20-2020",
        "title": "IMPterpreter",
        "description": "A simple interpreter for the IMP language"
    }
]

export default function Projects() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
        <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
        <h2 id="projects"> Projects </h2>
        <div>
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        partialVisible={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        >
        {projects.map(project => {
                return <ProjectCard key={uuidv4()} project={project}/>
            })}
        </Carousel>
        </div>

        </Container>
      </Container>
  )
}
