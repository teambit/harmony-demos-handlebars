
import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';
import { PartialsExample } from './index';

export default function Overview() {
  return (
      <>
    <Section>
        <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
        <List spacing="lg">
        {[
            `This is a slightly more complicated handlebarjs implementation, using partials`,
            `The partial here renders a single person's data. It is called in the main handlebar template to render a list of people`
        ]}
        </List>
    </Section>
    <Separator />
    </>
  );
};

Overview.abstract = 'Bit component incorporating a Handlebar.js partial templates';

Overview.labels = ['extension', 'node', 'handelbars', 'webpack', 'template', 'partials'];

const persons = [
    { name: "Nils", age: 20 },
    { name: "Teddy", age: 10 },
    { name: "Nelson", age: 40 },
  ]


Overview.examples = [
  {
    scope: {
        PartialsExample,
    },
    title: 'Using the simple handlebars example',
    description: 'Basic handlebars template.',
    jsx: 
    (
        <div style={{ width: 400 }}>
            <PartialsExample persons={persons} />
        </div>)
  }
];
