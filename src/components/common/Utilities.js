
export const Utilities = {
    isNullOrEmpty: (str) => {
        return str === null || str === "" || str === undefined
    },
    selectedKeys: (path) => {
        if (path === "/thong-ke") {
            return '1';
        }

        if (path === "/thong-ke/mat-bang-co-hoi") {
            return '2';
        }
    }
}