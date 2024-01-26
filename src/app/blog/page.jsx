import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link href="blog/test" className={styles.container} key="1">
				<div>{/* <Image /> */}</div>
			</Link>
		</div>
	);
};

export default Blog;
