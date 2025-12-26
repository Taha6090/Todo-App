import { toast } from "sonner"

export const loadFromStorage = <T>(key: string): T | null => {

    try {
        const getItem = localStorage.getItem(key);
        if (getItem != null) {
            const res: T = JSON.parse(getItem);

            return res;
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const saveToStorage = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
}