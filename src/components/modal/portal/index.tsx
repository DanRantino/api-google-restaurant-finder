import { createPortal } from 'react-dom';
import { FC } from 'react';

const PortalModal: FC = ({ children }) => {
    const portal = document.getElementById('modal-root');
    if (portal !== null) {
        return createPortal(children, portal);
    }
    return <div />;
};
export default PortalModal;
