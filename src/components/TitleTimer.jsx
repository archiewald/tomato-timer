import React from 'react';
import {Helmet} from "react-helmet";

export const TitleTimer = ({time}) => (
    <Helmet defer={false}>
        <title>{time.toString()}</title>
    </Helmet>
)