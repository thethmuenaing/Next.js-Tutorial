const { userAgent } = require("next/server");

function User({ user }) {
	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<br />
		</>
	);
}
export default User;
