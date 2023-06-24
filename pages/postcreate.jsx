import React from "react";
import { useRouter } from 'next/router';
import DefaultLayout from '../components/layout/DefaultLayout';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { TextField, Box, Button, Card, } from '@mui/material';

const [open, setOpen] = React.useState(false);
const [fileObjects, setFileObjects] = React.useState([]);

const PostCreate = () => {
    //const router = useRouter();
    //const app = router.query.page;
    return (
        <Box 
        sx={{
            backgroundColor: 'white',
            position: 'relative',
            margin: '50px',
            }}
        >
        <Card
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="200px"
            sx={{
                backgroundColor: 'white',
                margin: '30px',
                borderRadius: '13px',
                border: '1px solid black'
                }}>
                <span>Upload file</span>
                <IconButton
                    style={{ right: '12px', top: '8px', position: 'absolute' }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={() => setOpen(true)}>
                Add Image
            </Button>
        <DropzoneDialogBase
            dialogTitle={dialogTitle()}
            acceptedFiles={['image/*']}
            fileObjects={fileObjects}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={open}
            onAdd={newFileObjs => {
                console.log('onAdd', newFileObjs);
                setFileObjects([].concat(fileObjects, newFileObjs));
            }}
            onDelete={deleteFileObj => {
                console.log('onDelete', deleteFileObj);
            }}
            onClose={() => setOpen(false)}
            onSave={() => {
                console.log('onSave', fileObjects);
                setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
            />
        </Card>
        <Card
            sx={{
                backgroundColor: 'white',
                margin: '30px',
                marginBottom: '60px',
                borderRadius: '13px',
                border: '1px solid black'
            }}>
            <TextField
                variant="standard"
                size="small"
                sx={{ flex: '1' }}
                placeholder="Write a Caption"
            />
        </Card>
        <div>
            <Button
                    variant="contained" size="small"
                    sx={{
                        backgroundColor: '#287EFF',
                        paddingLeft: '5px',
                        fontSize: '12px',
                        fontFamily: 'Poppins',
                    }}
                >    
                Post
            </Button>
        </div>

    </Box>  
    )
}
PostCreate.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;
export default PostCreate;
