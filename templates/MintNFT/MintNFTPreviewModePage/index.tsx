import Layout from '@/components/Layout'
import Description from '@/components/Description'
import Details from './Details'

const statistics = [
	{
		label: 'Created by',
		avatar: '/images/avatar.jpg',
		history: true,
		title: 'Dash',
		login: 'randomdash',
	},
	{
		label: 'Collection',
		image: '/images/balls.jpg',
		title: 'Cute Planet',
		category: 'cute',
	},
]

const MintNFTPage = () => {
	return (
		<Layout layoutNoOverflow headerHide footerHide>
			<Description
				exit
				image='/images/main-pic-1.jpg'
				title='Escape'
				date='Minted on Aug 18, 2022'
				statistics={statistics}
				content={
					<>
						<p>
							Tesseract is the one stop marketplace for discovering state of the
							art Generative AI models.
						</p>
						<p>Official website: tesseractxyz.com</p>
					</>
				}
			>
				<Details />
			</Description>
		</Layout>
	)
}

export default MintNFTPage
