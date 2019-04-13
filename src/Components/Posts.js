import React from "react";
import { Grid,Typography,Card,CardActionArea,CardActions,CardContent,CardMedia } from "@material-ui/core";



 export const Posts=(props) => {

  
  
    const fakeDb=[
      {   id:'',
          Title: 'Comida Mexicana',
          Excerpt:'Aquí las quesadillas sí llevan queso',
          img:'https://loremflickr.com/320/240/food'
      },
      {   id:'',
          Title: 'Cenas Románticas',
          Excerpt:'Para que te azoten contra la pared',
          img:'https://loremflickr.com/320/240/food'
      },
      {   id:'',
          Title: 'Comida Barata',
          Excerpt:'Come rico sin salirte de tu presupuesto',
          img:'https://loremflickr.com/320/240/food'
      },
      {
          Title: 'Comida Vegetariana',
          Excerpt:'Sí vives de ensalada',
          img:'https://loremflickr.com/320/240/food'
      },
      {
        Title: 'Comida Italiana',
        Excerpt:'Algo más que pizza',
        img:'https://loremflickr.com/320/240/food'
    },
    {
      Title: 'Comida Light',
      Excerpt:'Como bajar 10 kilos en 5 min',
      img:'https://loremflickr.com/320/240/food'
  }
  ]
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify="center">
        {fakeDb.map(post => (
          <Grid item key={post.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="{post.Title}"
                  maxheight='300'
                  maxwidth="200"
                  image={post.img}
                  title={post.Title}
                />
                <CardContent>
                  <Typography gutterBottom color='inherit' variant="h5" component="h2">
                    {post.Title}
                  </Typography>
                  <Typography component="p"> {post.Excerpt} </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
