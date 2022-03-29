import styled from 'styled-components'

export function Home() {

	const Section = styled.section`
		display: flex;
		margin: 1rem;
		padding: 2rem;
		flex-direction: row;
	`

	const Wrapper = styled.div`
        background: var(--light-200);
        padding: 2rem;
        width: 16rem;
        margin: 1.5rem;
    `

	return (
		<Section>
			<Wrapper>
	            <h1>To Do</h1>
	        </Wrapper>  

	        <Wrapper>
	            <h1>In Progress</h1>
	        </Wrapper>

	        <Wrapper>
	            <h1>Complete</h1>
	        </Wrapper>  
	    </Section>
	)
}