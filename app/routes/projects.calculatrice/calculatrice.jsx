
import sliceAppLarge from '~/assets/haddah-jeu-screen.png';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/haddah-jeu-screen.png';
import sliceBackgroundLarge from '~/assets/hadddah-jeu-gameplay.png';
import sliceBackgroundPlaceholder from '~/assets/hadddah-jeu-gameplay.png';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/haddah-jeu-gameplay-2.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/haddah-jeu-gameplay-2.png';
import sliceSidebarLayersLarge from '~/assets/haddah-jeu-gameplay-2.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/haddah-jeu-gameplay-2.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './calculatrice.module.css';

const title = 'Jeu : La quête magique d Haddah';
const description =
  'Créé et développé un jeu autour duquel nous avons mis en place une stratégie de promotion notamment par la réalisation d’un trailer promotionnel. À l’aide de différents outils comme Stencyl et plateformes comme Itch.io. Nous avons mis en place un prototype du jeu vidéo en moins d’une semaine.';
const roles = ['Développeur', 'Stencyl'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Calculatrice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://y3no.itch.io/haddah"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Création du jeu, la quête magique d'Haddah à l'aide de Stencyl"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on Slice. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
       
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
