
export const Utilities = {
    isNullOrEmpty: (str) => {
        return str === null || str === "" || str === undefined
    },
    selectedKeys: (path) => {
        if (path ==="/admin" || path==="/admin/dashboard") {
            return '1';
        }

        if (path==="/admin/users") {
            return '2';
        }
    }
}