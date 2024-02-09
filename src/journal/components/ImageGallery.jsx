import { Box, ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
    return (
        <Box>
            <ImageList variant="masonry" cols={3} gap={15} p={10}>
                {
                    images.map((img) => (
                        <ImageListItem key={img}>
                            <img
                                srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${img}?w=248&fit=crop&auto=format`}
                                alt={img}
                                loading="lazy"
                                style={{
                                    boxShadow: '0 0 10px #00000006',
                                    border: '1px solid #00000010',
                                    borderRadius: '2px',
                                }}
                                className="userImage"
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </Box>
    );
}