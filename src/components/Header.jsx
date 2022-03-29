import styled from 'styled-components'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';


export function Header() {

	const Wrapper = styled.section`
		padding: 1.2rem;
		text-align: end;
		background: var(--navy-400);
		margin: 1rem;
		border-radius: 0.6rem;
		border: 1px solid var(--dark-200);
	`;

	const SpanDate = styled.span`
		margin-left: auto;
		font-weight: bold;
		font-size: 1rem;
		color: var(--dark-200);
	`;
	
	const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    	locale: ptBR
  	});

	return (
		<Wrapper as="header">
			<SpanDate> { currentDate } </SpanDate>
		</Wrapper>
	)
}