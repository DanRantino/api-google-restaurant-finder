import { ReactNode } from 'react';

export type modalType = {
    children?: ReactNode;
    open: boolean;
    onClose: () => void;
}
