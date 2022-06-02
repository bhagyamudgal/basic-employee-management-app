import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import isEmail from "validator/es/lib/isEmail";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomButton from "./CustomButton";

function Form({ setEmployees }) {
	const nameRef = useRef("");
	const mobileRef = useRef("");
	const emailRef = useRef("");

	const [error, setError] = useState({
		name: { status: false, message: "" },
		mobile: { status: false, message: "" },
		email: { status: false, message: "" },
	});

	// function to handle form submission
	const formSubmitHandler = (event) => {
		event.preventDefault();
		const name = nameRef.current.value;
		const mobile = mobileRef.current.value;
		const email = emailRef.current.value;

		// console.log({ name, mobile, email });

		if (name.length === 0) {
			setError((prevState) => {
				return {
					...prevState,
					name: { status: true, message: "Name is required!" },
				};
			});

			return;
		} else {
			setError((prevState) => {
				return {
					...prevState,
					name: { status: false, message: "" },
				};
			});
		}

		if (mobile.length === 0) {
			setError((prevState) => {
				return {
					...prevState,
					mobile: { status: true, message: "Mobile is required!" },
				};
			});

			return;
		} else if (mobile.length !== 10) {
			setError((prevState) => {
				return {
					...prevState,
					mobile: {
						status: true,
						message: "Mobile number should be of 10 digits!",
					},
				};
			});

			return;
		} else {
			setError((prevState) => {
				return {
					...prevState,
					mobile: { status: false, message: "" },
				};
			});
		}

		if (email.length === 0) {
			setError((prevState) => {
				return {
					...prevState,
					email: { status: true, message: "Email is required!" },
				};
			});

			return;
		} else if (!isEmail(email)) {
			setError((prevState) => {
				return {
					...prevState,
					email: { status: true, message: "Email is wrong!" },
				};
			});

			return;
		} else {
			setError((prevState) => {
				return {
					...prevState,
					email: { status: false, message: "" },
				};
			});
		}

		setEmployees((prevState) => {
			return [...prevState, { id: uuidv4(), name, mobile, email }];
		});

		resetForm();
	};

	// function to reset form fields
	const resetForm = () => {
		nameRef.current.value = "";
		mobileRef.current.value = "";
		emailRef.current.value = "";
	};

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			onSubmit={formSubmitHandler}
			sx={{
				backgroundColor: "white",
				padding: "0 1rem",
				margin: "1rem 0",
			}}
		>
			<TextField
				id="name"
				label="Name"
				variant="standard"
				fullWidth
				placeholder="eg John Doe"
				required
				inputRef={nameRef}
				error={error?.name?.status}
				helperText={error.name.status ? error.name.message : ""}
				margin="dense"
			/>
			<TextField
				id="mobile"
				label="Mobile No."
				variant="standard"
				fullWidth
				placeholder="1234567890"
				required
				inputRef={mobileRef}
				error={error.mobile.status}
				helperText={error.mobile.status ? error.mobile.message : ""}
				margin="dense"
				type="number"
				inputMode="numeric"
			/>
			<TextField
				id="email"
				label="Email ID"
				variant="standard"
				fullWidth
				placeholder="johndoe@gmail.com"
				required
				inputRef={emailRef}
				error={error.email.status}
				helperText={error.email.status ? error.email.message : ""}
				margin="dense"
			/>

			<div style={{ display: "flex", justifyContent: "right" }}>
				<CustomButton buttonText="ADD" type="submit" />
			</div>
		</Box>
	);
}

export default Form;
