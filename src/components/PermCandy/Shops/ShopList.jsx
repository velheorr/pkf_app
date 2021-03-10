import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import s from "../PermCandy.module.css";
import React, {useState} from "react";

const ShopList = ({l, expanded, expand})=> {

    return(

            <Accordion expanded={expanded === l.id} onChange={expand(l.id)}>
                <AccordionSummary className={s.accordHead}  expandIcon={<ExpandMoreIcon />}><Typography variant="button" className={s.title}>{l.shop}</Typography></AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2"><span><i>Телeфон:</i> {l.phone}</span><span className={s.email}><i>Почта:</i> {l.email}</span></Typography>
                </AccordionDetails>
            </Accordion>

    )
}


export default ShopList;