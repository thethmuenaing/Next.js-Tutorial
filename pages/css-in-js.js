import styled from "styled-components";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;
function CSSJS() {
	return (
		<div>
			<h2 style={{ color: "red" }}>Hello World</h2>
			<Title>Styled Component</Title>
		</div>
	);
}
export default CSSJS;
