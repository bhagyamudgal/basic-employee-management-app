import React from "react";
import CustomButton from "./CustomButton";
import "./EmployeeList.css";

function EmployeeList({ employees, setEmployees }) {
	const employeeDeleteHandler = (employeeId) => {
		const newEmployeeList = employees.filter(
			(employee) => employee.id !== employeeId
		);

		setEmployees(newEmployeeList);
	};

	return (
		<div className="EmployeeList-Container">
			{employees?.length > 0 ? (
				employees?.map((employee, index) => {
					return (
						<div className="EmployeeList-Card" key={index}>
							<div className="EmployeeList-Card-Row1">
								<div className="EmployeeList-Card-Name">
									<p className="EmployeeList-Card-Title">
										Name
									</p>
									<p className="EmployeeList-Card-Value">
										{employee.name}
									</p>
								</div>
								<div className="EmployeeList-Card-Mobile">
									<p className="EmployeeList-Card-Title">
										Mobile No.
									</p>
									<p className="EmployeeList-Card-Value">
										{employee.mobile}
									</p>
								</div>
							</div>
							<div className="EmployeeList-Card-Row2">
								<div className="EmployeeList-Card-Email">
									<p className="EmployeeList-Card-Title">
										Email
									</p>
									<p className="EmployeeList-Card-Value">
										{employee.email}
									</p>
								</div>

								<div className="EmployeeList-Card-Button">
									<CustomButton
										buttonText="Delete"
										onClick={() =>
											employeeDeleteHandler(employee.id)
										}
									/>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<p className="EmployeeList-Warning">No Employee to show!</p>
			)}
		</div>
	);
}

export default EmployeeList;
