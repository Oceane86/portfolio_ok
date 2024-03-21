import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageYaspeezWebDarkLarge from '~/assets/yaspeez-screen-large.webp';
import imageYaspeezWebDarkPlaceholder from '~/assets/yaspeez-screen-large.webp';
import imageYaspeezWebDark from '~/assets/yaspeez-screen.webp';
import imageYaspeezWebLightLarge from '~/assets/yaspeez-screen-large.webp';
import imageYaspeezWebLightPlaceholder from '~/assets/yaspeez-screen-large.webp';
import imageYaspeezWebLight from '~/assets/yaspeez-screen.webp';

import imageMockupDarkLarge from '~/assets/yaspeez-Mockup.webp';
import imageMockupDarkPlaceholder from '~/assets/yaspeez-Mockup.webp';
import imageMockupDark from '~/assets/yaspeez-Mockup.webp';
import imageMockupLightLarge from '~/assets/yaspeez-Mockup.webp';
import imageMockupLightPlaceholder from '~/assets/yaspeez-Mockup.webp';
import imageMockupLight from '~/assets/yaspeez-Mockup.webp';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';


const title = 'YASPEEZ';
const description =
  'Ce projet a été réalisé avec un client réel qui est une application permettant de mettre en relation des pratiquants une même activité physique, pour pouvoir trouver un lieu ou unc coach. Nous avons dû créer un site internet.';
const roles = [
  'UX et UI Design',
  'Front End Development',
  'Wordpress',

];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Yaspeez= () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageMockupDark} 1280w, ${imageMockupDarkLarge} 2560w`
                  : `${imageMockupLight} 1280w, ${imageMockupLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageMockupDarkPlaceholder
                  : imageMockupLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Les besoins</ProjectSectionHeading>
            <ProjectSectionText>
            Nous avons travaillé avec un client pour créer un site web reliant des amateurs d activités physiques. Notre but était de concevoir une charte graphique et une maquette. Nous avons travaillé dur pour offrir une expérience utilisateur optimale. Le site est maintenant prêt à être lancé, répondant aux besoins du client et proposant une interface simple et attrayante pour les utilisateurs.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageYaspeezWebDark} 1024w, ${imageYaspeezWebDarkLarge} 2048w`
                  : `${imageYaspeezWebLight} 1024w, ${imageYaspeezWebLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageYaspeezWebDarkPlaceholder
                  : imageYaspeezWebLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
     
       
      </ProjectContainer>
      <Footer />
    </>
  );
};
