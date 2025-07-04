import { useState, useEffect } from "react";

const useIsIOS = () => {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        const platform = navigator.platform;
        const iOS = /iPad|iPhone|iPod/.test(ua)
            || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        setIsIOS(iOS);
    }, []);

    return isIOS;
};

export default useIsIOS;
