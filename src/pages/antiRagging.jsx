import { Stack, Typography } from "@mui/material"
import React from "react";
import DefaultLayout from '../components/layout/DefaultLayout';

const antiRagging = () => {
  return (
    <>
      <Stack p={2.5}>
        <Typography variant="body2" fontFamily='Poppins' textAlign='center'>
          <h2><u>VEER SURENDRA SAI UNIVERSITY OF<br /> TECHNOLOGY</u></h2>
        </Typography>
        <Typography variant="body2" fontFamily='Poppins' textAlign='center'>
          <h3>OFFICE ORDER</h3>
        </Typography>
        <Typography variant="body2" paddingLeft={2.5} paddingRight={2.5} fontFamily='Poppins'>
          <h4><b>A Ragging Prevention Committee is hereby constituted consisting of the following members for the academic session 2019-20 in the line of Hon’ble Supreme Court orders and UGC guidelines to assist the University authorities in prevention of ragging.</b></h4>
        </Typography>
        <Typography variant="body2" p={2.5} fontFamily='Poppins' fontSize='normal' fontWeight='400'>
          <table border='1' frame='void' rules='rows' cellPadding='5px' fontWeight='20px' >
            <tbody><tr>
              <td> 1 .   Dean, Students’ Welfare </td>
              <td>Convener</td>
            </tr>
              <tr>
                <td> 2 .   Registrar, VSSUT, Burla</td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 3 .   COF, VSSUT, Burla</td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 4 .   All Teachers of VSSUT </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 5 .   All Non-Teaching Staffs of VSSUT</td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 6 .   All Non-Teaching Staffs of VSSUT </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 7 .   Sri Hrudananda Prusty, Final Year, MME </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 8.   Sri. Sanjeev DAsh, Final Year, Mechanical Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 9 .   Ms. Kousanai Das, Final Year, El &TC Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 10 .   Sri. Satyajeet Das, Pre-final Year, Electrical Engg </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 11 .   Sri. Krupasindhu Sarangi, Pre-final year, Civil Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 12 .   Sri. Gourav Das, Pre-final Year, Production Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 13 .   Sri. Biswa Ranjan Sahoo, Pre-final Year, Comp Sc. Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 14 .   Sri. Abhijit Tripathy, Pre-final Year, Elect. Engg </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 15 .   Ms. Manjulata Mishra, Pre- final Year, ETC. Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 16 .   Sri. Ajit Kumar Kar, 24 Year, Producation Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 17 .   Sri. Lamalesh Kumar Naik, 2nd Year B. Arch. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 18 .   Ms. Subhangi Mishra, 2nd Year, Comp Sc. Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 19 .   Ms. Amrita Das, 2nd Year, ETC Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 20 .   Ms. Ananya Ray, 1st Year, EI&TC Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 21 .   Ms. Sriya Smruti Seth, 1st Year, EI&TC Engg. </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 22 .   Sri. Rajat Mishra, 1st Year, Archicture </td>
                <td>Member</td>
              </tr>
              <tr>
                <td> 23 .   Sri. Rajat Mishra, 1st Year, Chemical Engg. </td>
                <td>Member</td>
              </tr>
            </tbody></table>
        </Typography>
      </Stack>

    </>

  );
}
antiRagging.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;

export default antiRagging;