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

    return (
        <div className="max-w-[1400px] mx-auto py-10">
            <div className="bg-[#F3F3F3] rounded-[30px] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div className="space-y-6 ml-10 place-content-center">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">
                                Contact our team
                            </h1>
                            <p>
                                We can't wait to hear from you. Your input is
                                important to us.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/vector15.png" alt="Vector 2" />
                        </div>
                        <div>
                            <hr className="h-1 bg-[#D32F2F] border-0 w-96 my-4" />
                            <div>
                                Reach out and we'll get in touch within 24 hours
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative">
                        <div className="bg-white rounded-[30px] p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="mb-2">First Name *</div>
                                        <input
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2">Last Name *</div>
                                        <input
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {[
                                    'contactNumber',
                                    'email',
                                    'companyName',
                                    'message',
                                ].map((field) => (
                                    <div key={field}>
                                        <div className="mb-2">
                                            {field.charAt(0).toUpperCase() +
                                                field
                                                    .slice(1)
                                                    .replace(
                                                        /([A-Z])/g,
                                                        ' $1'
                                                    )}{' '}
                                            *
                                        </div>
                                        <input
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                            placeholder={`Enter ${
                                                field.charAt(0).toUpperCase() +
                                                field
                                                    .slice(1)
                                                    .replace(/([A-Z])/g, ' $1')
                                            }`}
                                            name={field}
                                            type={
                                                field === 'email'
                                                    ? 'email'
                                                    : 'text'
                                            }
                                            value={formData[field]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-[20%] bg-[#D32F2F] text-white py-2 rounded-lg hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Submit'}
                                </button>
                            </form>

                            {formSubmitted && (
                                <p className="mt-4 text-green-600">
                                    Thank you for contacting us! We'll get back
                                    to you soon.
                                </p>
                            )}
                        </div>
                        <img
                            className="absolute top-[45%] -right-16 -z-10"
                            src="/vector17.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
