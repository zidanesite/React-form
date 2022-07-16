import React, { useState } from "react";

function FunctionForm() {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");
	const [data, setData] = useState([]);

	const HandleSubmit = (e) => {
		e.preventDefault();
		setData([...data, { name, gen, email }]);
		setName("");
		setGen("");
		setEmail("");
	};

	return (
		<>
			<h1 style={{ margin: "40px" }}>forms ooo forms</h1>
			<form onSubmit={HandleSubmit} style={{ margin: "40px" }}>
				<label>Name</label>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value, "");
					}}
				/>
				<br />
				<label>Gen</label>
				<input
					type="text"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
				<br />
				<label>Email</label>
				<input
					type="text"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<br />
				<button>submit</button>
			</form>

			{data.map((item, index) => {
				return (
					<div style={{ margin: "40px" }}>
						<h1>Name: {item.name}</h1>
						<h2>Gen:{item.gen}</h2>
						<h2>Email: {item.email}</h2>
					</div>
				);
			})}
		</>
	);
}

export default FunctionForm;