import gamestackTexture2Large from '~/assets/puppy-clean-services.webp';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/puppy-clean-services.webp';
import gamestackTextureLarge from '~/assets/puppy-clean-screen-large.webp';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/puppy-clean-screen.webp';
import sliceTextureLarge from '~/assets/haddah-jeu.webp';
import pythonTextureLarge from '~/assets/snake.webp';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import morpionTexture from '~/assets/morpion-screen.webp';
import morpionTextureLarge from '~/assets/morpion-screen.webp';
import morpionTexturePlaceholder from '~/assets/morpion-screen.webp';
import flyersTexture from '~/assets/depliant-eclairage.jpg';
import flyersTextureLarge from '~/assets/depliant-eclairage.jpg';
import flyersTexturePlaceholder from '~/assets/depliant-eclairage.jpg';
import pythonTexturePlaceholder from  '~/assets/snake2.png';
import calculatriceTexture from '~/assets/calculatrice-screen.webp';
import calculatriceTextureLarge from '~/assets/calculatrice-screen.webp';
import calculatriceTexturePlaceholder from '~/assets/calculatrice-screen.webp';
import myNetflixTexture from '~/assets/mynetflix-screen.webp';
import myNetflixTextureLarge from '~/assets/mynetflix-screen.webp';
import myNetflixTexturePlaceholder from '~/assets/mynetflix-screen.webp';
import lotoTexture from '~/assets/loto-screen.webp';
import lotoTextureLarge from '~/assets/loto-screen.webp';
import lotoTexturePlaceholder from '~/assets/loto-screen.webp';
import sliceTexture from '~/assets/haddah-jeu.webp';
import pythonTexture from '~/assets/snake2.png';
import sprTextureLarge from '~/assets/yaspeez-screen-large.webp';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/yaspeez-screen-large.webp';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developpeur Web',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="YASPEEZ"
        description="Ce projet a été réalisé avec un client réel qui est une application permettant de mettre en relation des pratiquants une même activité physique, pour pouvoir trouver un lieu ou unc coach. Nous avons dû créer un site internet."
        buttonText="Voir le projet"
        buttonLink="/projects/yaspeez"
        model={{
          type: 'laptop',
          alt: 'YASPEEZ',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Puppy Clean"
        description="Application mobile pour une boutique spécialisée dans le toilettage de chien."
        buttonText="Voir le projet"
        buttonLink="/projects/puppy-clean"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="La quête magique d'Haddah"
        description="Création d'un jeu vidéo avec stencyl"
        buttonText="Voir le projet"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="Snake"
        description="Snake en python"
        buttonText="Voir le projet"
        buttonLink="/projects/snake"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${pythonTexture} 800w, ${pythonTextureLarge} 1920w`,
              placeholder: pythonTexturePlaceholder,
            },
          ],
        }}
      />


  <ProjectSummary
        id="project-5"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={5}
        title="Morpion"
        description="Application mobile pour une boutique spécialisée dans le toilettage de chien."
        buttonText="Voir le projet"
        buttonLink="/projects/morpion"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${morpionTexture} 800w, ${morpionTextureLarge} 1920w`,
              placeholder: morpionTexturePlaceholder,
            },
          ],
        }}
      />


<ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={6}
        title="Calculatrice"
        description="Javascript"
        buttonText="Voir le projet"
        buttonLink="/projects/calculatrice"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${calculatriceTexture} 800w, ${calculatriceTextureLarge} 1920w`,
              placeholder: calculatriceTexturePlaceholder,
            },
          ],
        }}
      />

     

<ProjectSummary
        id="project-7"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={7}
        title="Flyers"
        description="Photoshop"
        buttonText="Voir le projet"
        buttonLink="/projects/flyers"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${flyersTexture} 800w, ${flyersTextureLarge} 1920w`,
              placeholder: flyersTexturePlaceholder,
            },
          ],
        }}
      />


      

<ProjectSummary
        id="project-8"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={8}
        title="My Netflix"
        description="PHP"
        buttonText="Voir le projet"
        buttonLink="/projects/netflix"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${myNetflixTexture} 800w, ${myNetflixTextureLarge} 1920w`,
              placeholder: myNetflixTexturePlaceholder,
            },
          ],
        }}
      />


      

<ProjectSummary
        id="project-10"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={10}
        title="Loto"
        description="PHP"
        buttonText="Voir le projet"
        buttonLink="/projects/loto"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${lotoTexture} 800w, ${lotoTextureLarge} 1920w`,
              placeholder: lotoTexturePlaceholder,
            },
          ],
        }}
      />


      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
