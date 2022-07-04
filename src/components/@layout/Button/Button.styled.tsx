import styled from 'styled-components';
import { theme } from "../../../styles/theme";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent; 
	color: ${({theme}) => theme.colors.white};
	background: ${({theme}) => theme.colors.black100};
	font-weight: bold;
	
	${(props) =>
		props.shadow &&
		`
			box-shadow: 2px 2px 4px 3px rgba(0, 0, 0, 0.03);
		`};
	${(props) =>
		props.size === 'lg' &&
		`
			width: 100%;
			height: 84px;
			font-size: 23px;
		`};
	${(props) =>
		props.size === 'md' &&
		`
			height: 55px;
			padding: 0 36px;
			font-size: 20px;
		`};
	${(props) =>
		props.size === 'sm' &&
		`
			height: 22px;
			padding: 0 36px;
			font-size: 13px;
		`};

	${(props) =>
		props.bgColor === 'black' &&
		!props.disabled &&
		`
			background: ${theme.colors.black100};
			color: ${theme.colors.white};
		`};

	${(props) =>
		props.bgColor === 'blue' &&
		!props.disabled &&
		`
			background: ${theme.colors.mainColor};
			color: ${theme.colors.white};
		`};

	${(props) =>
		props.bgColor === 'white' &&
		!props.disabled &&
		`
			background: ${theme.colors.white};
			color: ${theme.colors.black100};
		`};
`;
