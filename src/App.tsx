import * as React from 'react'
import styled from 'styled-components'
import {
  Action,
  getAction,
} from './actions'
import {
  Button,
  Header,
  Link,
  Page,
  Paragraph,
} from '@chadlavi/clear'


const CenteredPage = styled(Page)`
  text-align: center;
`

const ActionDisplay = styled(Paragraph)`
  font-size: 1.5rem;
  font-weight: bold;
  padding: calc(var(--clear-unit) * 3);
  border: 1px solid var(--clear-border);
  border-radius: calc(var(--clear-unit) * 2);
  background: var(--clear-zebra);
  width: calc(var(--clear-unit) * 64);
  margin: auto;
`

const ShowAction = ({action}: {action?: Action}): JSX.Element => {
  return action ? (
    <ActionDisplay>
      {
        action.url
          ? <Link href={action.url}>{action.label}</Link>
          : action.label
      }
    </ActionDisplay>
  ) : (<></>)
}

const App: React.FC = () => {
  const [action, setAction] = React.useState<Action | undefined>()
  return (
    <CenteredPage>
      <Header>You should...</Header>
      <ShowAction action={action} />
      <Paragraph>
        <Button
          primary={!action}
          onClick={(): void => setAction(getAction())}
        >
          {action ? 'Or c' : 'C'}lick me to generate a{action ? 'nother' : ''} random action
        </Button>
      </Paragraph>
    </CenteredPage>
  )
}

export default App
