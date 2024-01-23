import { useEffect, useState, useCallback } from 'react';
import type { MouseEventHandler } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import Portal, { createContainer } from './Portal';

import { ModalClose, ModalTitle, ModalWrapper, Overlay } from '../styledComponents';

const MODAL_CONTAINER_ID = 'modal-container-id';

type Props = {
    onClose?: () => void;
    title: string;
    children: React.ReactNode;
    visible: boolean;
};

const Modal = (props: Props) => {
    const { onClose, children, title, visible } = props;

    const [isMounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(visible);

    const handleClose: MouseEventHandler<HTMLDivElement> = useCallback(() => {
        onClose?.();
        setIsVisible(false);
    }, [onClose]);

    const onCloseModalWithWrapper = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const targetElement = e.target as HTMLElement;
        const inModal = targetElement.closest('[data-id="modal"]');
        if (inModal) return;
        onClose?.();
    };

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.setAttribute('data-modal', 'visible');
        }
    }, [isVisible]);

    useEffect(() => {
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose?.();
            }
        };

        window.addEventListener('keydown', handleEscapePress);

        return () => {
            window.removeEventListener('keydown', handleEscapePress);
            document.body.removeAttribute('data-modal');
        };
    }, [onClose]);

    return isMounted ? (
        <Portal id={MODAL_CONTAINER_ID}>
            <Overlay onClick={onCloseModalWithWrapper}>
                <ModalWrapper data-id='modal'>
                    <ModalTitle>{title}</ModalTitle>
                    {children}
                    <ModalClose onClick={handleClose}>
                        <CloseIcon />
                    </ModalClose>
                </ModalWrapper>
            </Overlay>
        </Portal>
    ) : null;
};

export default Modal;
