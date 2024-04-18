import { useContext } from "react"
import DataUserContext from "../context/useDataUser"

export const useDataUser = () => {
    return useContext(DataUserContext);
}