import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps, ReactNode } from "react";

export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;

type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Popup> & {
	children: ReactNode;
};

export function DrawerContent({ children, className = "", ...props }: DrawerContentProps) {
	return (
		<DrawerPrimitive.Portal>
			<DrawerPrimitive.Backdrop className="resume-drawer-backdrop" />
			<DrawerPrimitive.Viewport className="resume-drawer-viewport">
				<DrawerPrimitive.Popup className={`resume-drawer-popup${className ? ` ${className}` : ""}`} {...props}>
					<div className="resume-drawer-handle" aria-hidden="true" />
					{children}
				</DrawerPrimitive.Popup>
			</DrawerPrimitive.Viewport>
		</DrawerPrimitive.Portal>
	);
}

export const DrawerTitle = DrawerPrimitive.Title;
export const DrawerDescription = DrawerPrimitive.Description;
