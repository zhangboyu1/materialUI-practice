import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from '../StyleLists'
import Hidden from '@material-ui/core/Hidden';


const GridListImag = () => {

    const tileData = [{
        img: 'image',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'image',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'image',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'image',
        title: 'Image',
        author: 'author',
        cols: 2,
    }

    ]
    // this arry data should be getting back from the server for example
    // So We should use useEffect to actually fetch the tileData from the server forexample....
    // So that is how the reac tsaga comes into place.....
    const { gridList } = useStyles()
    return (
        <div>
            <Hidden only="sm">
                <GridList cellHeight={200} cols={4} spacing={10} className={gridList}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>

                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </Hidden>
        </div>
        // The material UI grid system is actually use the CSS Flex-box module for its flexibility
    )
}

export default GridListImag;