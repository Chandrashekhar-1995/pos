import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../store/itemSlice";

const useGetItems = () => {
    const dispatch = useDispatch()

    const getItems = async () => {
        const data = await fetch("http://localhost:8080/api/v1/items/get-item");
        const json = await data.json();
        // console.log(json)
        dispatch(addItems(json));
    };
    useEffect(() => {
        getItems()
    },[])
};

export default useGetItems;