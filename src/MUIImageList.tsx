import {ImageList, ImageListItem} from "@mui/material";
import {Thumbnail} from "./Types/Thumbnail";
import React from "react";

export default function MUIImageList(props: {images: Thumbnail[]}) {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {props.images.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`data:image/jpeg;base64,${item.bytes}`}
                        alt={item.name}
                        loading="lazy" // Optional for better performance
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}