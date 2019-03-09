import React from 'react';
import Apps from '../../util/apps';
import App from '../../components/appItem';

import {
  Container,
  Header,
  Section,
  SectionBody,
  SectionHeader,
} from './styles';

interface Props {
  setApp: (app: Apps) => void;
}

export default function AppMenu(props: Props) {

  const selectApp = (app: Apps) => () => {
    props.setApp(app);
  }

  return (
    <Container>
      <Header>{'Project'}</Header>
      <Section>
        <SectionHeader>{'Arrays'}</SectionHeader>
        <SectionBody>
          <App text={'Merge Sort'} onClick={selectApp(Apps.MERGESORT)}/>
          <App text={'App 2'} />
          <App text={'App 3'} />
          <App text={'App 4'} />
          <App text={'App 4'} />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeader>{'Strings'}</SectionHeader>
        <SectionBody>
          <App text={'App 1'} />
          <App text={'App 2'} />
          <App text={'App 3'} />
          <App text={'App 4'} />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeader>{'Linked Lists'}</SectionHeader>
        <SectionBody>
          <App text={'App 1'} />
          <App text={'App 2'} />
          <App text={'App 3'} />
          <App text={'App 4'} />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeader>{'Trees'}</SectionHeader>
        <SectionBody>
          <App text={'App 1'} />
          <App text={'App 2'} />
          <App text={'App 3'} />
          <App text={'App 4'} />
        </SectionBody>
      </Section>
    </Container>
  );
}
