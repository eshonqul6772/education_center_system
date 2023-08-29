import { useSelector } from 'react-redux';

const useAuth = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isFetched = useSelector(state => state.auth.isFetched);
    const token = useSelector(state => state.auth.token);
    const firstName = useSelector(state => state.auth.profile.firstName);
    const lastName = useSelector(state => state.auth.profile.lastName);
    const username = useSelector(state => state.auth.profile.username);
    const phone = useSelector(state => state.auth.profile.phone);
    const role = useSelector(state => state.auth.profile.role);
    const id = useSelector(state => state.auth.profile.id)

    return {
        isLoggedIn,
        isFetched,
        token,
        firstName,
        lastName,
        username,
        phone,
        role,
        id
    }
}

export default useAuth;