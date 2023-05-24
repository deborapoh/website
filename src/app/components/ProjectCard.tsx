import { Card, CardContent, CardMedia, Typography } from "@mui/material"

import t from '../images/gb-front.jpg'

const ProjectCard = ({ src, title, description }: { src: string; title: string; description: string }) => {
  console.log(t.src)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={src}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default ProjectCard
