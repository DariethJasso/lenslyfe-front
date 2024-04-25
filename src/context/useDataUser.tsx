import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { logoutUser } from "../store/authSlice";
import { SWRConfig } from "swr";
import useSWR from "swr"; // Importa useSWR
import axios from "axios";
import { Post, User } from "@/lib/type";

export type DataUser = {
    users: User | null;
    posts: Post[];
    userFull: User[];
    logout: () => void;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const DataUserContext = React.createContext<DataUser>({
    users: null,
    posts: [],
    userFull: [],
    logout: () => {}
});

const DataUserProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const [users, setUsers] = React.useState<User | null>(null);
    const user = useSelector((state: RootState) => state.auth.user);
    const [userFull, setUserFull] = React.useState<User[]>([]);
    const logout = () => {
        setUsers(null);
        dispatch(logoutUser());
    };

    const { data: postData } = useSWR('http://127.0.0.1:8000/api/posts/posts', fetcher, { refreshInterval: 5000 });
    const posts = postData?.post || []; // Accedemos a postData.post si existe, de lo contrario, asignamos un array vacío


    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get('http://127.0.0.1:8000/api/users', config);
            console.log(response.data);
            const { users } = response.data;
            setUserFull(users);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        setUsers(user);
        fetchUsers();
    }, [user]);

    return (
        <SWRConfig value={{ fetcher }}>
            <DataUserContext.Provider value={{ users, logout, posts,userFull }}>
                {children}
            </DataUserContext.Provider>
        </SWRConfig>
    );
};

export default DataUserContext;
export { DataUserProvider };
