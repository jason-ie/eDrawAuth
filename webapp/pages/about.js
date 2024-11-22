import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Grid,
  Button,
  Stack,
  TextField
} from '../src/app/components/muiComponents';
import './about.css';

export default function AboutUs() {
  return (
    <>
      <Container className='container'>
        <Grid container rowSpacing={6} columnSpacing={2}>
          <Grid size={12} className="text-center image">
            <h1 className='text-white'>About Us</h1>
            <hr className='hr'></hr>
            <div className='about-us'>
              Headquartered in the historical North End of Boston, MA, enLabel Global Services is a Technology and Consulting Services Company, which provides first-class Integrated Packaging Management (IPM) Solutions to highly-regulated global industries.
              Working diligently with manufacturers and distributors in the Medical Device, Biotech, Pharmaceutical, Aerospace, and Petro/Chemical industries, our main objective is to deliver the highest ROI to our clients by providing a software platform, which supports a uniform architecture, to deliver unsurpassed global packaging solutions.
            </div>
          </Grid>
          <Grid className="text-center" size={12} >
            <h2>Overview</h2>
            <hr className='hr'></hr>
          </Grid>
          <Grid container size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} rowSpacing={2}>
            <Grid>
              <h3 className='red-text'>Our Guarantee</h3>
            </Grid>
            <Grid>
              <p>
                Attain global accessibility to generate your packaging from one uniform platform.
                Achieve 100% electronic version control of your packaging.
                Make global changes to any data on your packaging, regardless of how many products you have, in less than one hour.
              </p>
            </Grid>
            <Grid>
              <h3 className='red-text'>
                Our systematic approach provides streamlined methodologies to:
              </h3>
            </Grid>
            <Grid>
              <p>
                Facilitate regulatory compliance and global marketability.
                Reduce the overall packaging life-cycle and its total cost of ownership.
                Mitigate packaging-associated risks.
                And minimize the overall time-to-market cycle.
              </p>
            </Grid>
          </Grid>
          <Grid className="text-center" size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <img src='/vector18.png' />
          </Grid>
          <Grid container className="grey-card">
            <Grid className="text-center" size={12} >
              <h3>Why Choose Us?</h3>
              <hr className='hr'></hr>
            </Grid>
            <Grid container size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} rowSpacing={4} columnSpacing={2}>
              <Grid>
                <h3 className='red-text'>
                  INNOVATION
                </h3>
              </Grid>
              <Grid>
                <p>
                  Our patented technology provides for a highly configurable, and highly reliable, off-the-shelf software.
                  We are a single source provider of end-to-end Integrated Packaging Management solutions. We design, develop, deploy, maintain, and support all of our products in-house, at our Boston, MA, headquarters.
                  We are fully committed to understanding our clients' requirements, and exceeding their expectations with innovative solutions.
                </p>
              </Grid>
            </Grid>
            <Grid container size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} rowSpacing={4} columnSpacing={2} >
              <Grid>
                <h3 className='red-text'>
                  IMPROVEMENT
                </h3>
              </Grid>
              <Grid>
                <p>
                  We are committed to creating a culture of Total Quality, where the continuous improvement of our people, our processes, and our products is a way of life.
                  We incorporate client input, and our industry experience, to deliver validated solutions, using our market-proven process for strategic planning and project execution.
                  Visit the Platform and Services sections of our website to learn more about how enLabel Global Services can support your packaging needs.
                </p>
              </Grid>

            </Grid>
            <Grid className="text-center" size={12}>
              <h3 className='red-text'>INTEGRITY</h3>
            </Grid>
            <Grid className="text-center" size={12}>
              <p>
                Our team consists of highly skilled domain experts. As such, we have an unsurpassed track record of successful execution of enterprise-wide packaging solutions for all of our global clients.
                Our team is dedicated to providing products and services with the highest standard of quality.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}