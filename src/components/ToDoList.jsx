import styled from 'styled-components'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export function ToDoList() {
	const Wrapper = styled.div`
		background: var(--off-white);
		max-width 42rem;
		padding: 2rem;
		margin: 0 auto;
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.2px);
		-webkit-backdrop-filter: blur(3.2px);
		border: 1px solid rgba(255, 100, 127, 0.29);
	`
	

	const Ul = styled.ul`
		padding: .2rem;
	`
	return (
		<Wrapper>
			<Tabs>
    			<TabList>
      				<Tab>Tarefas para fazer:</Tab>
      				<Tab>Tarefas feitas:</Tab>
    			</TabList>

			    <TabPanel>
      				<Ul>
						<li>Teste</li>
						<li>Teste 2</li>
					</Ul>	
    			</TabPanel>
    			
    			<TabPanel>
      				<h2>Caso não tenha tarefas</h2>
    			</TabPanel>
  			</Tabs>

			
		</Wrapper>

	)
}