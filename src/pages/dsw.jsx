import React from "react";
import DefaultLayout from '../components/layout/DefaultLayout';
import AddIcon from '@mui/icons-material/Add';
import { InputSharp } from "@mui/icons-material";
import { Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import { typography } from '@mui/system';


const imageStyle = {
    borderRadius: '50%',
}

const PostCreate = () => {
	return (
        <>
        <Box sx={{ display: 'flex' ,flexDirection: 'row',justifyContent: 'space-between',p: 2,}}>
            <Box>
                <u><Box sx={{ fontWeight: 'bold',fontSize: 30,mx:4,my:3,}}>DEAN STUDENT'S WELFARE</Box></u>
                <Box sx={{ fontWeight: 'bold',fontSize: 20,mx:4,my:2,}}>Prof. Sanjaya Kumar Patro</Box>
                <Box sx={{mx:4,my:2,}}><a href="#">studentswelfaredean@gmail.com</a></Box>
            </Box>
            <Box sx={{mx:10}}>
                <Box 
                component="img"
                src="./dsw.jpg"
                width={150}
                height={150}
                style ={imageStyle}
                />
            </Box>
        </Box>
        <Box sx={{ fontWeight: '500',mx:5,}}>
            <p>The Dean of the Student's Welfare is a whole time Professor of the 
            University having the following responsibilities.</p>
        </Box>
        <Box sx={{ fontWeight: '400',mx:3,}}>
            <ul>
            <li>Organizing and managing all matters related to student's welfare, conduct and discipline.</li>
            <li>Coordinating industrial training programmes and placement of all the registered students of the University.</li>
            <li>Coordinating NCC/Physical training/NSS/Yoga programmes.</li>
            <li>Liaison with parents/guardians of students with respect to their performance and conduct on a regular basis.</li>
            <li>Coordinating with wardens/assistant wardens of halls of resisdence for their smooth functioning.</li>
            <li>Coordinating with vice presidents of student societies/clubs regarding the extra-curricular activities of the students.</li>
            <li>Coordinating with the counsellors for SC/ST students regarding their problems.</li>
            <li>Corodinating with anti ragging squad, anti ragging monitoring cell and ragging prevention cell to ensure ragging free campus.</li>
            <li>Coordinating with law and order authorities with respect to student discipline.</li>
            <li>Supervising the work of security staff and security agency appointed for the University and its halls of residence.</li>
            <li>To look after the overall development of halls of residence and act as chairman of hall coordination committee.</li>
            </ul>
        </Box>
        </>
	);
}
PostCreate.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;

export default PostCreate;