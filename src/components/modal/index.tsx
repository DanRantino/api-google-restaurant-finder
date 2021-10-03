import { FC, MouseEvent, useEffect } from 'react';
import PortalModal from './portal';
import { Dialog, Overlay } from './styles';
import { modalType } from '../../types/modalType';

const Modal: FC<modalType> = ({
                                  children
                                  , open,
                                  onClose
                              }) => {

    useEffect(() => {
        window.addEventListener('keydown', onEsc);
        return () => window.removeEventListener('keydown', onEsc);
    }, []);

    const onEsc = (e: KeyboardEvent) => {
        if (e.keyCode === 27) {
            onClose();
        }
    };
    const onOverlayClick = () => {
        onClose();
    };
    const onDialogClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    if (open === false) return null;
    return (
        <PortalModal>
            <Overlay onClick={() => onOverlayClick()}>
                <Dialog onClick={(e) => onDialogClick(e)}>
                    {children}
                </Dialog>
            </Overlay>
        </PortalModal>
    );
};

export default Modal;
