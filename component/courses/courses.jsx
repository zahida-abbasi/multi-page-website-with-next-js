import {
    Card,
    Container,
    Typography,
    CardActions,
    CardContent,
    Button,
    Grid2,
    } from "@mui/material";
import Link from "next/link";
    
const Courses = () => {
   
    const myCourses = [
        {
            title : "ReactJs",
            price : 3000,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/react"
        },
        {
            title : "NextJs",
            price : 5000,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/nextjs"
        },
        {
            title : "Angular",
            price : 3500,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/angular"
        },{
            title : "NodeJs",
            price : 4000,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/nodejs"
        },
        {
            title : "VueJs",
            price : 4500,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/veuejs"
        },
        {
            title : "Python",
            price : 6000,
            desc : "lorem spum jsumejhan hermunsev mssss krbbrhbew",
            link : "/courses/python"
        }
    ]
   const NewCourse = ({item}) => {
       const tmp = (
           <>
              <Grid2 item sm={4} >
                 <Card sx={{p:3}}>
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                             {item.title}
                         </Typography>
                         <Typography variant="h5" color="text.secondary">
                             {item.price}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                             {item.desc}
                         </Typography>
                     </CardContent>
                     <CardActions>
                        <Link href={item.link} >
                        {/* <Link href={{
                            pathname: item.link,
                            query: {
                                name : "ReactJs",
                                price : 3000,
                                desc : "ReactJs is frontend language "
                            }

                        }}> */}
                          <Button variant="outlined">Syllabus</Button>
                        </Link>
                     </CardActions>
                 </Card>
              </Grid2>
           </>
       );
       return tmp; 
   }
   const design = (
      <>
        <Container sx={{py:4,p:3}}>
           <Typography variant="h2" sx={{mb:3}}>Courses</Typography>
               <Grid2 container spacing={6}>
                   {
                     myCourses.map((item,index)=>{
                        return <NewCourse  key={index} item={item} />
                     })
                   }
               </Grid2>
        </Container>
      </>
   );return design;
}
export default Courses