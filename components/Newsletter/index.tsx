import { useState } from "react";
import cn from "classnames";
import styles from "./Newsletter.module.sass";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type NewsletterProps = {};

const Newsletter = ({}: NewsletterProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
			<div className={styles.row}>
				<div className={styles.col}>
					<div className={cn('h2', styles.title)}>Download</div>
					<div className={styles.content}>
						Place where developers & creators can showcase, run and monetize
						their innovative generative AI models.
					</div>
					<div className={styles.btns}>
						<a
							className={cn('button-large', styles.button)}
							href='https://tesseractxyz.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span>App Store</span>
							<Icon name='apple' />
						</a>
						<a
							className={cn('button-white button-large', styles.button)}
							href='https://tesseractxyz.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span>play Store</span>
							<Icon name='google-play' />
						</a>
					</div>
				</div>
				<div className={styles.col}>
					<div className={cn('h2', styles.title)}>Newsletter</div>
					<div className={styles.info}>Get the latest Tesseract updates</div>
					<form
						className={styles.form}
						action=''
						onSubmit={() => console.log('Submit')}
					>
						<div className={styles.fieldset}>
							<Field
								className={styles.field}
								inputClassName={styles.input}
								placeholder='Name'
								icon='profile'
								value={name}
								onChange={(e: any) => setName(e.target.value)}
								light
								required
							/>
							<Field
								className={styles.field}
								inputClassName={styles.input}
								placeholder='Email'
								type='email'
								icon='email'
								value={email}
								onChange={(e: any) => setEmail(e.target.value)}
								light
								required
							/>
						</div>
						<button
							className={cn('button-white button-large', styles.button)}
							type='submit'
						>
							SUBSCRIBE NOW
						</button>
					</form>
				</div>
			</div>
		)
};

export default Newsletter;
