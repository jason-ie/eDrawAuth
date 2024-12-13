import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSubmitSupportFormMutation } from '../src/app/redux/api/authApi';
import { setError } from '../src/app/redux/authSlice';
import './support.css';

export default function Support() {
    const dispatch = useDispatch();
    const [submitSupport, { isLoading }] = useSubmitSupportFormMutation();

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
        setFormData((prev) => ({ ...prev, [name]: value }));
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

    const inputclassname =
        'required w-full py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm/6 border-gray-200 rounded-[5px] focus:border-white focus:outline-none focus:ring-2 focus:border-gray-400';

    return (
        <div className="container justify-center">
            <div className="grey-card">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-6 justify-center">
                        <h1 className="heading">Contact our team</h1>
                        <p>
                            We can't wait to hear from you. Your input is
                            important to us.
                        </p>
                        <img
                            className="justify-img"
                            src="/vector15.png"
                            alt="Vector 2"
                        />
                        <hr className="hr"></hr>
                        <div>
                            Reach out and we'll get in touch within 24 hours
                        </div>
                    </div>

                    <div className="col-span-6 support-form">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-12">
                                <div className="col-span-6">
                                    <label htmlFor="firstName">
                                        First Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className={inputclassname}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="lastName">
                                        Last Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className={inputclassname}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="contactNumber">
                                        Contact Number *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="contactNumber"
                                        name="contactNumber"
                                        placeholder="Enter Contact Number"
                                        className={inputclassname}
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="email">Email ID *</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email ID"
                                        className={inputclassname}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="companyName">
                                        Company Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Enter Company Name"
                                        className={inputclassname}
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        className={inputclassname}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="submitbtn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
