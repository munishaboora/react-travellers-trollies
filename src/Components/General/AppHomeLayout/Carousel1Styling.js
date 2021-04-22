import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = ({images}) => {

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
			style={{ height: 600, margin: 'auto', top: 64 }}
    />
	);
};

export default App;
