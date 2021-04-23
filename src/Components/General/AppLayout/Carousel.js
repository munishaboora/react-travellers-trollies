import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = ({ images, style }) => {

	return (
		<Carousel
			isAutoPlaying={true}
			autoPlayInterval={3000}
			hasLeftButton={false}
			hasRightButton={false}
			hasMediaButton={false}
			hasSizeButton={false}
			hasIndexBoard={false}
			hasThumbnails={false}
			images={images}
			style={style}
		/>
	);
};

export default App;
