import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { logoutUser } from "../store/authSlice";

type User = {
    id: number,
    name: string,
    lastname: string,
    username: string,
    avatar: string,
    telephone: string,
    biography: string
    email: string
}
export type DataUser = {
    users:User | null;
    logout:() => void
}

const DataUserContext = React.createContext<DataUser>({
    users:null,
    logout:() => {}
});

const DataUserProvider = ({children}:{children:React.ReactNode}) => {
    const dispatch = useAppDispatch();
    const [users, setUsers] = React.useState<User | null>(null);
    const user = useSelector((state:RootState) => state.auth.user)

    const logout = () => {
        setUsers(null);
        dispatch(logoutUser());
        
    }

    useEffect(() => {
        setUsers(user)
    })

    return (
        <DataUserContext.Provider value={{users,logout}}>
            {children}
        </DataUserContext.Provider>
    )
}

export default DataUserContext;
export {DataUserProvider}