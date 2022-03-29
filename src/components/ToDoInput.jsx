import styled from 'styled-components' 

export function ToDoInput() {

	const Wrapper = styled.div`
		background: var(--pink-100);
		padding: 4rem;
		max-width: 42rem;
		margin: 4rem auto;
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.2px);
		-webkit-backdrop-filter: blur(3.2px);
		border: 1px solid rgba(255, 100, 127, 0.29);
	`;

	const Form = styled.div`
		margin: 0 auto;
	`; 
	const Input = styled.input`
		color: var(--dark-700);
		width: 26rem;
		padding: .6rem 1rem;
		margin: 0rem 0.6rem 0rem 0rem;
		border-radius: 10px;
		border: none;
	`;

	const Button = styled.button`
		background: var(--pink-500);
		color: white;  
		padding: .6rem 2rem;
		border-radius: 8px;
		border: none;
		font-weight: bold;
	`
	return (
		<Wrapper>
			<Form as="form" action="#">
				<Input type="text" name="todo" />
				<Button type="submit">Salvar</Button>
			</Form>
		</Wrapper>	
	
	)
}