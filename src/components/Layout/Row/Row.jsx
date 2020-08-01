import React from 'react';

import CardBig from '../../Cards/CardBig/CardBig';
import CardSmall from '../../Cards/CardSmall/CardSmall';
import classes from './Row.module.css';


const Row = (props) => {
   
    const colorsLeft = ['#FFDAC1', '#FEB7B2', '#D8F4AF'];
    const colorsLeftDark = ['#C9611A', '#B74942', '##67902B'];
    let indexNumLeft = -1;
    const colorsRight = ['#C8CFEA', '#B5EBD7', '#FADE9D'];
    const colorsRightDark = ['#3D6054', '#3D6054', '#3D6054'];
    let indexNumRight = 0;

    let row;

    if(props.position) {
        row = props.products.map((cookie) => {
                indexNumLeft++;
                if(indexNumLeft > 2){indexNumLeft = 0}
                return(
                    <CardBig 
                        key={cookie.name}
                        color={colorsLeft[indexNumLeft]} 
                        colorDark={colorsLeftDark[indexNumLeft]}
                        name={cookie.name}
                        desc={cookie.desc}
                        price={cookie.price}
                        url={cookie.url} />);
            });
    }
    else { //right row will always have one small card at the start which will inform about promos
        row = 
            <React.Fragment>
                <CardSmall color={'#C8CFEA'} />
                {props.products.map((cookie) => {
                    indexNumRight++;
                    if(indexNumRight> 2){indexNumRight = 0}
                    return(
                        <CardBig 
                            key={cookie.name}
                            color={colorsRight[indexNumRight]} 
                            colorDark={colorsRightDark[indexNumRight]}
                            name={cookie.name}
                            desc={cookie.desc}
                            price={cookie.price}
                            url={cookie.url} />);
                })}
            </React.Fragment>
    }  

   return(
        <div className={classes.Row}>
            {row}
        </div>
   )
}

export default Row;