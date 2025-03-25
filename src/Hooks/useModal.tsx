import { useState } from "react";
import { ModalValueI } from "types"; // Pastikan path ini benar

const useModal = () => {
    const [show, setShow] = useState(false);
    const [modalValue, setModalValue] = useState<ModalValueI>({
        call_name: "",
        name: "",
        position: "",
        figure: "",
        description: ""
    });

    const handleClose = () => setShow(false);
    const handleOpen = (value: ModalValueI) => {
        setModalValue(value);
        setShow(true);
    };

    return { show, modalValue, handleClose, handleOpen };
};

export default useModal;
