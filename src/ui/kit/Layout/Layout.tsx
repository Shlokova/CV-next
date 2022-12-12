import s from './Layout.module.css';
import {Navbar} from '@/ui/kit/Navbar/Navbar';
import {PropsWithChildren} from 'react';
import {Container} from '@/ui/kit/Container/Container';

type Props = PropsWithChildren & {
  className?: string;
};

export function Layout({className, children}: Props) {
  return (
    <div className={s.root}>
      <Navbar />
      <Container className={s.page}>{children}</Container>
    </div>
  );
}
