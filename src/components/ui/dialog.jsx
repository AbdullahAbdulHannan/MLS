import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
const Dialog = DialogPrimitive.Root;

const DialogContent = ({ className, children, ...props }) => {

  const isKeyboardOpen = useDetectKeyboardOpen(500);
  
  return(
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
      )}
    />
    <DialogPrimitive.Content
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg sm:rounded-lg",
        // Mobile-specific styles
        isKeyboardOpen?"max-h-[50vh]  ":"max-h-[95vh]",
        " overflow-y-scroll", 
        "md:max-h-screen", 
        "touch-auto", 
        "pb-20 md:pb-6",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close 
        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Cross2Icon className="h-8 w-8 text-red-900" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
)};

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

const DialogTitle = ({ className, ...props }) => (
  <DialogPrimitive.Title
    className={cn("text-lg font-semibold leading-none tracking-tight text-blue-900", className)}
    {...props}
  />
);

export { Dialog, DialogContent, DialogHeader, DialogTitle };