import React from "react";
import { Grid,Typography,Card,CardActionArea,CardActions,CardContent,CardMedia,Button } from "@material-ui/core";



 export const Posts=(props) => {
    const fakeDb=[{
      title:'',
      id:'',
      image:'',

    }]
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify="center">
        {fakeDb.map(post => (
          <Grid item key={post.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="{post.title}"
                  height="140"
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom color='inherit' variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
