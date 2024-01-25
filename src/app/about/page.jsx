import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
					fill={true}
					alt="about us"
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Lorem ipsum dolor sit</h1>
					<h2 className={styles.imgDec}>
						Lorem ipsum, dolor sit amet consectetur adipisicing.
					</h2>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Are We? </h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
						consequuntur, quam, cumque impedit dolorum tempore voluptates atque
						saepe et velit illo expedita non cum beatae ipsa voluptatibus itaque
						eos laborum nostrum blanditiis? Unde ipsa debitis velit, nihil
						repellendus cum officiis neque dolore ullam natus quam! Inventore,
						eligendi placeat cum natus magni ipsam aspernatur corrupti veniam
						quo ratione autem quia!
						<br />
						<br />
						Alias assumenda ab doloribus repellendus velit placeat repellat
						quidem facere! Dolorem eaque veniam dolor laborum numquam inventore
						molestias eveniet ex, quibusdam quasi pariatur suscipit commodi
						perferendis iusto saepe! Earum culpa rem blanditiis, est porro
						perferendis itaque fuga impedit tempora, quaerat optio nemo
						praesentium voluptate inventore! Quis, sint!
					</p>
				</div>

				<div className={styles.item}>
					<h1 className={styles.title}>What We Do?</h1>
					<p className={styles.dec}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
						alias illo quidem autem eligendi tempore officiis, eum illum facilis
						facere reprehenderit dicta repudiandae aut animi sed. Voluptate
						earum illum accusamus provident animi vero sed facere incidunt
						tempore, et neque, debitis quo quisquam eum, cum laboriosam.
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
