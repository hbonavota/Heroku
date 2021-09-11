import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs} from "../../actions/getNFTs.js";
import { makeStyles } from '@material-ui/core/styles';
import Cards from "../card/card.jsx"
import Grid from '@material-ui/core/Grid';
import Search from "../Search/Search.jsx"

const useStyles = makeStyles((theme) => ({
    
    gridContainer: {
      marginTop: "30px"
    }
  }));

export default function Categories() {

  const stateAllNFTs = useSelector((state) => state.allNFTs);
  console.log(stateAllNFTs)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNFTs());
  }, [dispatch]);

 
    const classes = useStyles();
    return(
        <React.Fragment>
          <Search></Search>
          <Grid container spacing={6}  className={classes.gridContainer}>
              {
                  stateAllNFTs  ? stateAllNFTs.map(ele => {
                    return (
                      ele !== null && (
                        <div>
                          <Cards ele={ele} />
                        </div>
                      )
                    )

                  }) : <h1>Loading</h1>
              }
          </Grid>
        </React.Fragment>
    )
}