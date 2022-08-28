import React from 'react';
import './ProjectManagement.css';

const ProjectManagement = () => {
	const handleChange = name => event => {
		const value = name === "photo" ? event.target.files[0] : event.target.value;
		formData.set(name, value);
		setValues({ ...values, [name]: value });
	};

	return (
		<main>
			<h1>PROJECT MANAGEMENT</h1>
			<button>Add New Project</button>

			<form className="mb-3" onSubmit={addProject}>
				<h4>New Project</h4>

				<div className="form-group">
					<label className="text-muted">Title</label>
					<input
						onChange={handleChange("title")}
						type="text"
						className="form-control"
						value={title}
					/>
				</div>

				<div className="form-group">
					<label className="text-muted">Description</label>
					<textarea
						onChange={handleChange("description")}
						type="text"
						className="form-control"
						value={description}
					/>
				</div>

				<div className="form-group">
					<label className="text-muted">Price</label>
					<input
						onChange={handleChange("price")}
						type="number"
						className="form-control"
						value={price}
					/>
				</div>

				<div className="form-group">
					<label className="text-muted">Category</label>
					<select onChange={handleChange("category")} className="form-control">
						<option>Please Select</option>
						{categories &&
						categories.map((c, i) => (
							<option value={c._id} key={i}>
								{c.name}
							</option>
						))}
					</select>
				</div>

				<div className="form-group">
					<label className="text-muted">Quantity</label>
					<input
						onChange={handleChange("quantity")}
						type="number"
						className="form-control"
						value={quantity}
					/>
				</div>

				<div className="form-group">
					<label className="text-muted">Shipping</label>
					<select onChange={handleChange("shipping")} className="form-control">
						<option>Please Select</option>
						<option value="0">No</option>
						<option value="1">Yes</option>
					</select>
				</div>

				<button className="btn btn-outline-primary">Create Product</button>
			</form>
		</main>
	)
}

export default ProjectManagement;
