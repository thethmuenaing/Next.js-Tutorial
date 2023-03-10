// import { useSession } from "next-auth/client";
import { getSession, signIn } from "next-auth/client";
import { useState, useEffect } from "react";

function Dashboard() {
	// const [session, loading] = useSession();
	// console.log({ session, loading });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();
			if (!session) {
				signIn();
			} else {
				setLoading(false);
			}
		};
		securePage();
	}, []);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return <h1>Dashboard pae</h1>;
}
export default Dashboard;
