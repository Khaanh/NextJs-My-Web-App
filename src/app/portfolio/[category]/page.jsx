import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import item from "./data";

const Category = ({ params }) => {
	// console.log(params);
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			<div className={styles.item} key={item.id}>
				<div className={styles.content}>
					<h1 className={styles.title}>{item.title}</h1>
					<p className={styles.desc}>{item.desc}</p>
					<Button text="See More" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src={item.image}
						alt={item.title}
					/>
				</div>
			</div>
			<div className={styles.item} key={item.id}>
				<div className={styles.content}>
					<h1 className={styles.title}>{item.title}</h1>
					<p className={styles.desc}>{item.desc}</p>
					<Button text="See More" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src={item.image}
						alt={item.title}
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
