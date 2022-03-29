import styled from 'styled-components'

export function Sidebar() {

	const Aside = styled.aside`
		background: var(--light-200);
		padding: 2rem;
		color: var(--dark-800);
		font-weight: bold;
		max-width: 20vw;
		flex: 1;
		border-radius: .6rem;
		margin: 1rem;		
	`

	const Logo = styled.h1`
		color: var(--dark-800);
		font-weight: bold;
	`

	const Nav = styled.nav`
		display: block;
	`
	return (

		<Aside>
			<Logo>ToDo</Logo>

			<Nav>
				<ul>
					<li>Home</li>
					<li>Home</li>
					<li>Home</li>
				</ul>	
			</Nav>	
		</Aside>

	)
}