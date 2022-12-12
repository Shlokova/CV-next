import s from '../styles/pages/MainPage.module.css';
import {Button} from '../src/ui/kit/Button/Button';
import {Image} from '../src/ui/kit/Image/Image';

const MainPage = () => (
  <div className={s.root}>
    <div className={s.header}>
      <div className={s.photo}>
        <Image src={'/photo.png'} alt={''} className={s.img} width={1076} height={1074} />
      </div>
      <div className={s.text}>
        frontend developer
        <h1 className={s.name}>Shlokova Anna</h1>
        <div>
          Sociable and hardworking front-end developer with 1 years of experience in website development. Highly skilled
          in HTML/CSS/JavaScript/React and working knowledge of Photoshop and Figma.
        </div>
        <Button className={s.button}>Download cv</Button>
      </div>
    </div>
    <div className={s.info}>
      <h2 className={s.title}>What I do</h2>
      <div className={s.infoBlock}>
        <div className={s.item}>Implementing web design and development principles to build stable software.</div>
        <div className={s.item}>Bringing mock-ups to life using HTML, CSS, JavaScript.</div>
        <div className={s.item}>
          Collaborating closely with the team to support projects during all phases of delivery.
        </div>
        <div className={s.item}>Building websites and apps that are responsive and usable.</div>
        <div className={s.item}>Maintaining an organized workflow using a project management tool.</div>
        <div className={s.item}>Testing to identify bugs and technical issues.</div>
      </div>
    </div>
  </div>
);

export default MainPage;
