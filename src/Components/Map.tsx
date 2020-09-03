import React from "react";
import { TMap } from '../types/TMap';

const Map = ({ src, width, height }: TMap) => <><iframe src={src} width={`${width}`} height={`${height}`} title="Map"></iframe></>;

export {
    Map
}