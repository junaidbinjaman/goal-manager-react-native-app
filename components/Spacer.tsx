import React from 'react';
import {DimensionValue, View} from 'react-native';

type SpacerProps = {
    width?: DimensionValue;
    height?: DimensionValue;
    children?: React.ReactNode;
};

const Spacer = ({width = '100%', height = 40, children}: SpacerProps) => {
    return <View style={{width, height}} />;
};

export default Spacer;
