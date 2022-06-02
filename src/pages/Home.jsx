import React, { useState } from "react";
import Form from "../components/Form";
import EmployeeList from "../components/EmployeeList";

function Home() {
	const [employees, setEmployees] = useState([]);

	return (
		<div>
			<Form setEmployees={setEmployees} />
			<EmployeeList employees={employees} setEmployees={setEmployees} />
		</div>
	);
}

export default Home;
