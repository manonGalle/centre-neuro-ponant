export const REVERSE_MODE = "REVERSE_MODE";
export const actionReverseMode = () => ({
    type: REVERSE_MODE,
});

export const MENU_OPEN = "MENU_OPEN";
export const actionMenuOpen = () => ({
    type: MENU_OPEN,
});

export const KEEP_MAP = "KEEP_MAP";
export const actionKeepMap = () => ({
    type: KEEP_MAP,
    isMenuOpen: false,
});