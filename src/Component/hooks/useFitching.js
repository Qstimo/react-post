import { useState } from "react"

export const useFitching = (callback) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const fetching = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (error) {
            setErrorMessage(error);
        } finally {
            setLoading(false);
        }
    }
    return [loading, errorMessage, fetching];
}
// export const useFitching = (callback) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMessage, setError] = useState('');
//     const fetching = async () => {
//         try {
//             setIsLoading(true);
//             await callback();
//         } catch (error) {
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return [fetching, isLoading, errorMessage];
// }
