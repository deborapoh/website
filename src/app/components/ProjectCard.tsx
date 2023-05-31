import { Card, CardContent, CardMedia, Typography, styled } from "@mui/material"

const BlackText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
}))

const PurpleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}))

const ProjectCard = ({ src, title, description }: { src: string; title: string; description: string }) => {
  return (
    <Card sx={{ height: 275, width: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={src}
        title={title}
      />
      <CardContent>
        <PurpleText gutterBottom>
          {title}
        </PurpleText>
        <BlackText>
          {description}
        </BlackText>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default ProjectCard
