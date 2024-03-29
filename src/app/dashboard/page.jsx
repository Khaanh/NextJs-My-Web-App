"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// const [error, setError] = useState(false);
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const res = await fetch(
	// 			`https://jsonplaceholder.typicode.com/posts/${id}`,
	// 			{
	// 				cache: "no-store",
	// 			}
	// 		);

	// 		if (!res.ok) {
	// 			setError(true);
	// 		}
	// 		const data = await res.json();

	// 		setData(data);
	// 		setIsLoading(false);
	// 	};

	// 	getData();
	// }, []);

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(
		"https://jsonplaceholder.typicode.com/posts",
		fetcher
	);

	return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
