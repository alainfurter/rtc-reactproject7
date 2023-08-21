import ImageViewerContainer from "./ImageViewerContainer";
import ImageViewerTitle from "./ImageViewerTitle";
import ImageViewerText from "./ImageViewerText";
import ImageViewerImageContainer from "./ImageViewerImageContainer";
import ImageViewerImage from "./ImageViewerImage";

const ImageViewer = ({apiObject}) => {
    //console.log(apiObject);

    if (!apiObject) return (
        <ImageViewerContainer>
            <ImageViewerTitle>No data</ImageViewerTitle>
        </ImageViewerContainer>
    );
    return (
        <ImageViewerContainer>
            <ImageViewerTitle>{apiObject.name}</ImageViewerTitle>
            <ImageViewerImageContainer>
                <ImageViewerImage src={apiObject.image_url} alt={apiObject.name} />
            </ImageViewerImageContainer>
            <ImageViewerText>This image corresponds to the date: {apiObject.date}</ImageViewerText>
            <ImageViewerText>{apiObject.description}</ImageViewerText>
        </ImageViewerContainer>
    );
}

export default ImageViewer;