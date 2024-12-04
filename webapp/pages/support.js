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
    TextField,
} from '../src/app/components/muiComponents';
import './support.css';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import { useState } from 'react';
import { useSubmitSupportFormMutation } from '../src/app/redux/api/authApi';
import { useDispatch } from 'react-redux';
import { setError } from '../src/app/redux/authSlice';

export default function Support() {
    const dispatch = useDispatch();
    const [submitSupport, { isLoading }] = useSubmitSupportFormMutation();
    const supportPageData = useEdrawData('/api/Support-page');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        companyName: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));

        try {
            const result = await submitSupport(formData).unwrap();

            if (result.success) {
                setFormSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    contactNumber: '',
                    email: '',
                    companyName: '',
                    message: '',
                });
            }
        } catch (err) {
            dispatch(setError(err.data?.message || 'Failed to send message'));
        }
    };

    // if (!supportPageData) {
    //     return <Typography>Loading...</Typography>;
    // }

    // const { Title: edrawTitle, Description, WhyeDraw, WhyeDrawDesc, WhyeDrawSubHeading, Feature1 } = supportPageData;
    const inputclassname = " required w-full py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm/6  border-gray-200 rounded-[5px] focus:border-white focus:outline-none focus:ring-2 focus:border-gray-400"
    return (
        <>
            <div className='container justify-center'>
                <div className='grey-card'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6'>
                            <h1 className="heading">Contact our team</h1>
                            <p>
                                We can’t wait to hear from you. Your input is
                                important to us.
                            </p>
                            <img src="/vector15.png" alt="Vector 2" />
                            <hr className="hr"></hr>
                            <div>
                                Reach out and we’ll get in touch within 24 hours
                            </div>
                        </div>

                        <div className='col-span-6 support-form'>
                            <form onSubmit={handleSubmit}>
                                <div className=' grid grid-cols-12'>
                                    <div className='col-span-6'>
                                        <label htmlFor="firstname">
                                            First Name *
                                        </label>
                                        <div className="mt-2">
                                            <input

                                                type="text"
                                                placeholder="First Name"
                                                className={inputclassname}
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <label htmlFor="price">
                                            Last name *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="lastname"
                                                name="lastname"
                                                type="text"
                                                placeholder="Last name *"
                                                className={inputclassname}
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <label htmlFor="price">
                                            Contact Number *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="contactnumber"
                                                name="contactnumber"
                                                type="text"
                                                placeholder="Enter Contact Number"
                                                className={inputclassname}
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <label htmlFor="price">
                                            Email ID *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="emailid"
                                                name="emailid"
                                                type="text"
                                                placeholder="Enter Email ID "
                                                className={inputclassname}
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <label htmlFor="price">
                                            Company Name *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="companyname"
                                                name="companyname"
                                                type="text"
                                                placeholder="Enter Compnay Name"
                                                className={inputclassname}
                                                value={formData.companyName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <label htmlFor="price">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="message"
                                                name="message"
                                                type="text"
                                                placeholder="Message"
                                                className={inputclassname}
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    className="submitbtn"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? 'Sending...'
                                        : 'Submit'}
                                </Button>
                            </form>
                        </div>


                    </div>

                </div>

            </div>

        </>
    );
}
