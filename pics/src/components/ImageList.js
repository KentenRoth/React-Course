import React from "react";

const ImageList = props => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} alt={description} src={urls.regular} />;
    });

    return (
        <div>
            <div>{images}</div>
        </div>
    );
};

export default ImageList;
