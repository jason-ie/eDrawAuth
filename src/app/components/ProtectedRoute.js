import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
    const { accessToken } = useSelector((state) => state.auth);

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export const VerificationRoute = ({ children }) => {
    const { verificationPending, email } = useSelector((state) => state.auth);

    if (!verificationPending || !email) {
        return <Navigate to="/signup" replace />;
    }

    return children;
};

export const PasswordRoute = ({ children }) => {
    const location = useLocation();
    const verificationToken = location.pathname.split('/verify/')[1];

    if (!verificationToken) {
        return <Navigate to="/signup" replace />;
    }

    return children;
};
