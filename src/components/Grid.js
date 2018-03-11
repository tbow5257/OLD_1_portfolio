import React from 'react';

// Adapted from Goran Rakic's pen: https://codepen.io/golle404/pen/wWoXwz

class Grid extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="masonry-container">
                    <Masonry brakePoints={this.props.brakePoints}>
                        {this.props.images.map((image, id) => {
                            return (
                                <Tile src={image} />
                            )
                        })}
                    </Masonry>
                </div>
            </div>
        )
    }
}

const Tile = ({src}) => {
    return (
        <div className="tile">
            <img src={src} />
        </div>
    );
};

class Masonry extends React.Component{
    constructor(props){
        super(props);
        this.state = {columns: 1};
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount(){
        this.onResize();
        window.addEventListener('resize', this.onResize)
    }

    getColumns(w){
        return this.props.brakePoints.reduceRight( (p, c, i) => {
            return c < w ? p : i;
        }, this.props.brakePoints.length) + 1;
    }

    onResize(){
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if(columns !== this.state.columns){
            this.setState({columns: columns});
        }

    }

    mapChildren(){
        let col = [];
        const numC = this.state.columns;
        for(let i = 0; i < numC; i++){
            col.push([]);
        }
        return this.props.children.reduce((p,c,i) => {
            p[i%numC].push(c);
            return p;
        }, col);
    }

    render(){
        return (
            <div className="masonry" ref="Masonry">
                {this.mapChildren().map((col, ci) => {
                    return (
                        <div className="column" key={ci} >
                            {col.map((child, i) => {
                                return <div key={i} >{child}</div>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Grid;