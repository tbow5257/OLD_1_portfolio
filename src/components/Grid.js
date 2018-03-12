import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import objectFitImages from 'object-fit-images';


const MasonryContainer = styled.div`
  img {
    object-fit: cover;
    font-family: 'object-fit: cover;'
  }
  
  img:nth-of-type(2) {
    object-fit: cover;
    object-position: left;
    font-family: 'object-fit: cover; object-position: left;'

  }
`;


const photos = [
    { src: `${require('../assets/patrickteachingart.jpg')}`, width: 4, height: 2 },
    { src: `${require('../assets/museum_map_app.jpg')}`, width: 1, height: 1 },
    { src: `${require('../assets/imedsb.jpg')}`, width: 3, height: 2 },
    { src: `${require('../assets/weddingflowerskauai.JPG')}`, width: 3, height: 2 },
    { src: `${require('../assets/future_reality.jpg')}`, width: 3, height: 2 },
    { src: `${require('../assets/cardboard_app.jpg')}`, width: 4, height: 2 },
    // { src: `${require('../assets/kali.jpg')}`, width: 3, height: 2 },
    // { src: `${require('../assets/shine_light_site.jpg')}`, width: 4, height: 2 },
    // { src: `${require('../assets/flowersbyemma.jpg')}`, width: 4, height: 2 }
];

class Masonry extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    componentDidMount() {
        objectFitImages();
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
            <MasonryContainer>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </MasonryContainer>
        )
    }
}


export default Masonry;