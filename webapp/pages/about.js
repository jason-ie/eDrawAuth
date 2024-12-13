import './about.css';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';

export default function AboutUs() {
  const aboutUsData = useEdrawData('/api/about');
  if (!aboutUsData) return <div>Loading...</div>;
  const {
    AboutUs,ourguarantee,systematicapproach,innovation,improvement,integrity
  } = aboutUsData;
  return (
    <>
      <div className='container justify-center'>
        <div>
          <h1 className='text-center' >About Us</h1>
          <hr className='hr'></hr>
          <div className='image'>
            <div className='about-us'>
              {AboutUs}
            </div>
          </div>
          <h2 className='text-center'>Overview</h2>
          <hr className='hr'></hr>
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <h3 className='red-text'>Our Guarantee</h3>
              <p>
                {ourguarantee}
              </p>
              <h3 className='red-text'>
                Our systematic approach provides streamlined methodologies to:
              </h3>
              <p>
                {systematicapproach}
              </p>
            </div>
            <div className='col-span-4'>
              <img src='/vector18.png' />
            </div>
          </div>
          <div className='grey-card'>
            <h3 className='text-center'>Why Choose Us?</h3>
            <hr className='hr'></hr>
            <div className='grid grid-cols-12'>
              <div className='col-span-6'>
                <h3 className='red-text text-center'>
                  INNOVATION
                </h3>
                <p className='text-left'>
                  {innovation}
                </p>
              </div>
              <div className='col-span-6'>
                <h3 className='red-text text-center'>
                  IMPROVEMENT
                </h3>
                <p className='text-left'>
                 {improvement}
                </p>
              </div>
            </div>
            <h3 className='red-text text-center'>INTEGRITY</h3>
            <p className='text-center'>
              {integrity}
            </p>
          </div>
        </div>
      </div>
   
    </>
  );
}