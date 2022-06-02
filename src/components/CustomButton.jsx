import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function CustomButton({ buttonText, onClick, type }) {
	return (
		<StyledButton onClick={onClick} type={type} size="small">
			{buttonText}
		</StyledButton>
	);
}

const StyledButton = styled(Button)(({ theme }) => ({
	color: theme.palette.primary,
	fontWeight: 500,
	backgroundColor: "#EDE7FA",
	margin: "1rem 0",
}));

export default CustomButton;
