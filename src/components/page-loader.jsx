import { Suspense } from "react";

export default function PageLoader(Component) {
    return function WrappedComponent(props) {
        return (
            <Suspense>
                <Component {...props} />
            </Suspense>
        );
    };
}
