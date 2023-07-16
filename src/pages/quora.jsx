import { Box, Typography } from '@mui/material'
import { Link, Grid, Button, Card, CardContent, CardHeader, Avatar } from '@mui/material'

import DefaultLayout from '../components/layout/DefaultLayout'

const quora = () => {
  //  const router= UseRouter();
  //  const app=router.query.page;
  return (
    <DefaultLayout>
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        position: 'relative',
        margin: '40px',
        borderRadius: '10px',
        border: '1px solid black'
      }}
    >
      <div>
        <Typography variant='h6' margin='20px 30px 40px 30px'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</Typography>
      </div>


      <Card
        sx={{
          backgroundColor: 'white',
          margin: '30px',
          borderRadius: '10px',
          border: '1px solid black'
        }}>
        <Grid item sm={4}>
          <CardHeader

            avatar={<Avatar src="./avatar.png" />}
            title={<Typography variant='subtitle2' fontWeight={600}>Name  Surname</Typography>}
            subheader="3rd year. upadated on 3rd  march  2022">
          </CardHeader>
          <CardContent>
            <Typography variant='subtitle1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam earum adipisci, nulla ex reiciendis, incidunt reprehenderit sint non, et tenetur officiis obcaecati culpa quasi totam in optio laborum ad.
              <Link to='#'
                style={{
                  color: 'blue',
                  fontSize: '16px',
                  textDecoration: 'none',
                }}

              > Read more...</Link> </Typography>
          </CardContent>

        </Grid>
      </Card>

      <Card
        sx={{
          backgroundColor: 'white',
          //  padding:'0px',
          margin: '30px',
          marginBottom: '40px',
          borderRadius: '10px',
          border: '1px solid black'
        }}>
        <Grid item sm={4}>
          <CardHeader

            avatar={<Avatar src="./avatar.png" />}
            title={<Typography variant='subtitle2' fontWeight={600}>Name  Surname</Typography>}
            subheader="3rd year. upadated on 3rd  march  2022">
          </CardHeader>
          <CardContent>
            <Typography variant='subtitle1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam earum adipisci, nulla ex reiciendis, incidunt reprehenderit sint non, et tenetur officiis obcaecati culpa quasi totam in optio laborum ad.
              <Link to='#'
                style={{
                  color: 'blue',
                  fontSize: '16px',
                  textDecoration: 'none',
                  //  listStyle:'none',
                }}

              > Read more...</Link> </Typography>
          </CardContent>

        </Grid>
      </Card>
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'black',
          opacity: '.8',
          borderRadius: '10px',
          fontSize: '13px',
          padding: '10px 0 10px 0',
          postion: 'absolute',
          width: '100%',

        }}
      >Read more....


      </Button>
    </Box>
    </DefaultLayout>
  )
}
export default quora
