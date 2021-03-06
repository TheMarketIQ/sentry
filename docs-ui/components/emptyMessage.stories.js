import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Panel from 'settings-ui/panel';
import PanelHeader from 'settings-ui/panelHeader';
import EmptyMessage from 'settings-ui/emptyMessage';

import Button from 'sentry-ui/buttons/button';

storiesOf('EmptyMessage', module)
  .add(
    'default',
    withInfo('Super Generic')(() => (
      <div style={{background: '#fff'}}>
        <EmptyMessage>Nothing to see here</EmptyMessage>
      </div>
    ))
  )
  .add(
    'in panel',
    withInfo('Put this in a panel for maximum effect')(() => (
      <Panel>
        <PanelHeader>Audit Log</PanelHeader>
        <EmptyMessage>No critical actions taken in this period</EmptyMessage>
      </Panel>
    ))
  )
  .add(
    'in panel with icon',
    withInfo('Put this in a panel for maximum effect')(() => (
      <Panel>
        <PanelHeader>Members</PanelHeader>
        <EmptyMessage icon="icon-user">Sentry is better with friends</EmptyMessage>
      </Panel>
    ))
  )
  .add(
    'in panel with icon and action',
    withInfo('Put this in a panel for maximum effect')(() => (
      <Panel>
        <PanelHeader>Members</PanelHeader>
        <EmptyMessage
          icon="icon-user"
          action={<Button priority="primary">Invite Members</Button>}
        >
          Sentry is better with friends
        </EmptyMessage>
      </Panel>
    ))
  );
