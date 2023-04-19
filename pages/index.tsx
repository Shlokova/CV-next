import s from '../styles/pages/MainPage.module.css';
import {Button} from '@/ui/kit/Button/Button';
import {Image} from '@/ui/kit/Image/Image';
import {resources} from '../resources/resources';

const MainPage = () => (
  <div className={s.root}>
    <div className={s.header}>
      <div className={s.photo}>
        <Image src={resources.about.image} alt={''} className={s.img} width={1076} height={1074} />
      </div>
      <div className={s.text}>
        {resources.about.subtitle}
        <h1 className={s.name}>{resources.about.title}</h1>
        <div>{resources.about.description}</div>
        <Button href={'/static/documents/Shlokova_Anna-CV.pdf'} primary download={true} className={s.button}>
          {resources.about.buttonText}
        </Button>
      </div>
    </div>
    <div className={s.info}>
      <h2 className={s.title}>{resources.about.info.title}</h2>
      <div className={s.infoBlock}>
        {resources.about.info.information.map((el, idx) => (
          <div key={idx} className={s.item}>
            {el}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MainPage;
