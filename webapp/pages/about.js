import './about.css';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';

export default function AboutUs() {
  const aboutUsData = useEdrawData('/api/about');
  if (!aboutUsData) return <div>Loading...</div>;
  const {
    AboutUs
  } = aboutUsData;
  return (
    <>
      <div className='container'>
        <div>
          <h1 >About Us</h1>
          <hr className='hr'></hr>
          <div className='image'>
            <div className='about-us'>
              {AboutUs}
            </div>
          </div>
          <h2>Overview</h2>
          <hr className='hr'></hr>
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <h3 className='red-text'>Our Guarantee</h3>
              <p>
                Attain global accessibility to generate your packaging from one uniform platform.
                Achieve 100% electronic version control of your packaging.
                Make global changes to any data on your packaging, regardless of how many products you have, in less than one hour.
              </p>
              <h3 className='red-text'>
                Our systematic approach provides streamlined methodologies to:
              </h3>
              <p>
                Facilitate regulatory compliance and global marketability.
                Reduce the overall packaging life-cycle and its total cost of ownership.
                Mitigate packaging-associated risks.
                And minimize the overall time-to-market cycle.
              </p>
            </div>
            <div className='col-span-4'>
              <img src='/vector18.png' />
            </div>
          </div>
          <div className='grey-card'>
            <h3>Why Choose Us?</h3>
            <hr className='hr'></hr>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>
                <h3 className='red-text'>
                  INNOVATION
                </h3>
                <p className='text-left'>
                  Our patented technology provides for a highly configurable, and highly reliable, off-the-shelf software.
                  We are a single source provider of end-to-end Integrated Packaging Management solutions. We design, develop, deploy, maintain, and support all of our products in-house, at our Boston, MA, headquarters.
                  We are fully committed to understanding our clients' requirements, and exceeding their expectations with innovative solutions.
                </p>
              </div>
              <div className='col-span-6'>
                <h3 className='red-text'>
                  IMPROVEMENT
                </h3>
                <p className='text-left'>
                  We are committed to creating a culture of Total Quality, where the continuous improvement of our people, our processes, and our products is a way of life.
                  We incorporate client input, and our industry experience, to deliver validated solutions, using our market-proven process for strategic planning and project execution.
                  Visit the Platform and Services sections of our website to learn more about how enLabel Global Services can support your packaging needs.
                </p>
              </div>
            </div>
            <h3 className='red-text'>INTEGRITY</h3>
            <p>
              Our team consists of highly skilled domain experts. As such, we have an unsurpassed track record of successful execution of enterprise-wide packaging solutions for all of our global clients.
              Our team is dedicated to providing products and services with the highest standard of quality.
            </p>
          </div>
        </div>
      </div>
   
    </>
  );
}