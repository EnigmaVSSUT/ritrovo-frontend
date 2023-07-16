import { useState } from 'react';
import { TextField, Box, Button, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DefaultLayout from "./../components/layout/DefaultLayout";

const dialogTitle = "Upload Image";

const PostCreate = () => {
    const [fileObjects, setFileObjects] = useState([]);

    const handleFileInputChange = (event) => {
        const files = Array.from(event.target.files);
        const newFileObjs = files.map((file) => ({
            data: file,
            preview: URL.createObjectURL(file),
        }));
        setFileObjects([...fileObjects, ...newFileObjs]);
    };

    const handleRemoveImage = (index) => {
        const updatedFileObjects = [...fileObjects];
        updatedFileObjects.splice(index, 1);
        setFileObjects(updatedFileObjects);
    };

    return (
        <>
        <DefaultLayout>
            <Box
                sx={{
                    backgroundColor: 'white',
                    margin: '50px',
                    padding: '30px',
                    borderRadius: '5px',
                    border: '1px solid #3f3f3f',
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <Stack direction="row" alignItems="center">
                        <Button
                            variant="contained"
                            sx={{
                                height: 150,
                                background: "none",
                                color: "black",
                                boxShadow: "none",
                                textTransform: "none",
                                fontWeight: "900",
                                '&:hover': {
                                    background: "none",
                                    boxShadow: "none",
                                    cursor: "pointer"
                                }
                            }}
                            onClick={() => {
                                const fileInput = document.getElementById('file-input');
                                fileInput.click();
                            }}
                        >
                            Add an Image +
                        </Button>
                        <input
                            id="file-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
                            multiple
                        />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        {fileObjects.map((fileObject, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    border: '1px solid black',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={fileObject.preview}
                                    alt="Preview"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: '4px',
                                        right: '4px',
                                        backgroundColor: 'white',
                                    }}
                                    onClick={() => handleRemoveImage(index)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Box>
            <TextField
                variant="outlined"
                size="large"
                placeholder="Write a Caption"
                multiline
                rows={3}
                sx={{
                    marginLeft: 6,
                    marginRight: 6,
                }}
            />
            <Button
                variant="contained"
                size="medium"
                sx={{
                    backgroundColor: '#287EFF',
                    textAlign: "center",
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    maxWidth: "150px",
                    marginLeft: 6,
                    marginTop: 5,
                    marginBottom: 10
                }}
            >
                Post
            </Button>
            </DefaultLayout>
        </>
    );
};

export default PostCreate;