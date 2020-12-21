
import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';

export default function Overview() {
  return (
    <Section>
        <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
        <List spacing="lg">
        {[
            `This is a simple component illustrating how to use handlebarjs in conjunction with Bit`,
            `The output of this component is a section of html which should then be applied to your DOM in your prefered manner`
        ]}
        </List>
    </Section>
  );
};

Overview.abstract = 'Simple Bit component incorporating a Handlebar.js template';

Overview.labels = ['extension', 'node', 'handelbars', 'webpack', 'template'];