"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="shadow-gray-700 shadow-md border border-gray-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 w-full md:w-[80%]"
      >
        <span onClick={onHide}
          className="flex justify-end cursor-pointer">
            <Image
              src="/assets/xmark.svg"
              alt="close"
              width={16}
              height={16} />
          </span>
          {children}
      </dialog>
    ,
    document.getElementById("modal-root-content")
  );
};

export default Modal;