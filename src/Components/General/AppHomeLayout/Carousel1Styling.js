import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = ({images}) => {

	return (
		<Carousel
			isAutoPlaying={true}
			autoPlayInterval={5000}
			hasLeftButton={false}
      hasRightButton={false}
      hasMediaButton={false}
      hasSizeButton={false}
      hasIndexBoard={false}
      hasThumbnails={false}
			images={images}
			style={{ height: 600, width: 1000, margin: 'auto', top: 64 }}
    />
	);
};

export default App;
