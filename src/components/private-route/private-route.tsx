import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthStatus } from '../../const';

type AuthStatusEnum = typeof AuthStatus[keyof typeof AuthStatus];

type PrivateRouteProps = {
    authStatus: AuthStatusEnum;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
    const { authStatus, children } = props;

    if (authStatus === AuthStatus.AUTH)
        return children;
    else
        return <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;