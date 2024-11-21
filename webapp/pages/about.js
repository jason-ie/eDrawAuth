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
        <Grid container>
          <Grid size={12} className="text-center">
            <h1>About Us</h1>
            <p>
              Headquartered in the historical North End of Boston, MA, enLabel Global Services is a Technology and Consulting Services Company, which provides first-class Integrated Packaging Management (IPM) Solutions to highly-regulated global industries.
              Working diligently with manufacturers and distributors in the Medical Device, Biotech, Pharmaceutical, Aerospace, and Petro/Chemical industries, our main objective is to deliver the highest ROI to our clients by providing a software platform, which supports a uniform architecture, to deliver unsurpassed global packaging solutions.
            </p>
          </Grid>
          <Grid className="text-center" size={12} >
            <h2>Overview</h2>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <div>
              <h3>Our Guarantee</h3>
              <p>
                Attain global accessibility to generate your packaging from one uniform platform.
                Achieve 100% electronic version control of your packaging.
                Make global changes to any data on your packaging, regardless of how many products you have, in less than one hour.
              </p>
              <h3>
                Our systematic approach provides streamlined methodologies to:
              </h3>
              <p>
                Facilitate regulatory compliance and global marketability.
                Reduce the overall packaging life-cycle and its total cost of ownership.
                Mitigate packaging-associated risks.
                And minimize the overall time-to-market cycle.
              </p>
            </div>
          </Grid>
          <Grid className="text-center" size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <img src='/vector18.png' />
          </Grid>
          <Grid container className="grey-card">
            <Grid className="text-center" size={12} >
              <h3>Why Choose Us?</h3>
              <hr></hr>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <div>
                <h3>
                  INNOVATION
                </h3>
                <p>
                  Our patented technology provides for a highly configurable, and highly reliable, off-the-shelf software.
                  We are a single source provider of end-to-end Integrated Packaging Management solutions. We design, develop, deploy, maintain, and support all of our products in-house, at our Boston, MA, headquarters.
                  We are fully committed to understanding our clients' requirements, and exceeding their expectations with innovative solutions.
                </p>
              </div>
            </Grid>
            <Grid  size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <div>
                <h3>
                  IMPROVEMENT
                </h3>
                <p>
                  We are committed to creating a culture of Total Quality, where the continuous improvement of our people, our processes, and our products is a way of life.
                  We incorporate client input, and our industry experience, to deliver validated solutions, using our market-proven process for strategic planning and project execution.
                  Visit the Platform and Services sections of our website to learn more about how enLabel Global Services can support your packaging needs.
                </p>
              </div>
            </Grid>
            <Grid className="text-center" size={12}>
              <h3>INTEGRITY</h3>
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